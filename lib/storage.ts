import { DatabaseSync } from "node:sqlite";
import { mkdirSync, chmodSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { createHash, randomUUID } from "node:crypto";
import type { Inquiry } from "./inquiry.ts";
export function openDatabase(
  path = process.env.INQUIRY_DB_PATH || "data/inquiries.sqlite",
) {
  const absolute = resolve(/*turbopackIgnore: true*/ path);
  mkdirSync(dirname(absolute), { recursive: true, mode: 0o700 });
  const db = new DatabaseSync(absolute);
  chmodSync(absolute, 0o600);
  db.exec(
    "PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000; CREATE TABLE IF NOT EXISTS inquiries (id TEXT PRIMARY KEY, created_at INTEGER NOT NULL, payload TEXT NOT NULL, notification_status TEXT NOT NULL DEFAULT 'pending'); CREATE TABLE IF NOT EXISTS rate_limits (key TEXT PRIMARY KEY, window INTEGER NOT NULL, count INTEGER NOT NULL);",
  );
  return db;
}
export function storeInquiry(
  value: Inquiry,
  client: string,
  path?: string,
  now = Date.now(),
) {
  const db = openDatabase(path);
  const key = createHash("sha256").update(client).digest("hex");
  const window = Math.floor(now / 3600000);
  const id = randomUUID();
  try {
    db.exec("BEGIN IMMEDIATE");
    db.prepare("DELETE FROM rate_limits WHERE window < ?").run(window - 1);
    const row = db
      .prepare("SELECT count,window FROM rate_limits WHERE key=?")
      .get(key) as { count: number; window: number } | undefined;
    if (row && row.window === window && row.count >= 5) {
      db.exec("ROLLBACK");
      return { limited: true as const };
    }
    db.prepare(
      "INSERT INTO rate_limits(key,window,count) VALUES(?,?,1) ON CONFLICT(key) DO UPDATE SET window=excluded.window,count=CASE WHEN rate_limits.window=excluded.window THEN rate_limits.count+1 ELSE 1 END",
    ).run(key, window);
    db.prepare(
      "INSERT INTO inquiries(id,created_at,payload) VALUES(?,?,?)",
    ).run(id, now, JSON.stringify({ ...value, consentVersion: "2026-10-18" }));
    db.exec("COMMIT");
    return { limited: false as const, id };
  } catch (e) {
    try {
      db.exec("ROLLBACK");
    } catch {}
    throw e;
  } finally {
    db.close();
  }
}
export function setNotification(id: string, status: string) {
  const db = openDatabase();
  try {
    db.prepare("UPDATE inquiries SET notification_status=? WHERE id=?").run(
      status,
      id,
    );
  } finally {
    db.close();
  }
}
export function purgeBefore(cutoff: number, path?: string) {
  const db = openDatabase(path);
  try {
    return db.prepare("DELETE FROM inquiries WHERE created_at < ?").run(cutoff)
      .changes;
  } finally {
    db.close();
  }
}
