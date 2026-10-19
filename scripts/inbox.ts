import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { openDatabase } from "../lib/storage.ts";
const output = process.argv[2];
if (!output)
  throw new Error("Usage: npm run inbox -- /secure/path/inquiries.json");
const db = openDatabase();
try {
  const rows = db
    .prepare("SELECT * FROM inquiries ORDER BY created_at DESC")
    .all();
  writeFileSync(resolve(output), JSON.stringify(rows, null, 2), {
    mode: 0o600,
    flag: "wx",
  });
  console.log(
    `Exported ${rows.length} inquiries to the specified new file. Keep it private and apply retention.`,
  );
} finally {
  db.close();
}
