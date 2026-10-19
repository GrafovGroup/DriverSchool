import { NextResponse, after } from "next/server";
import { validateInquiry } from "@/lib/inquiry";
import { storeInquiry } from "@/lib/storage";
import { notifyInquiry } from "@/lib/notification";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const expected = new URL(process.env.SITE_URL || request.url).origin;
  if (!origin || origin !== expected)
    return NextResponse.json({ error: "origin" }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json({ error: "format" }, { status: 415 });
  if (Number(request.headers.get("content-length") || 0) > 16384)
    return NextResponse.json({ error: "size" }, { status: 413 });
  let raw: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error();
    let size = 0;
    const chunks: Uint8Array[] = [];
    for (;;) {
      const part = await reader.read();
      if (part.done) break;
      size += part.value.length;
      if (size > 16384) {
        await reader.cancel();
        return NextResponse.json({ error: "size" }, { status: 413 });
      }
      chunks.push(part.value);
    }
    raw = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const parsed = validateInquiry(raw);
  if (!parsed.ok)
    return NextResponse.json(
      { error: "validation", fields: parsed.errors },
      { status: 422 },
    );
  try {
    // Only trust a header explicitly configured and overwritten by the deployment proxy.
    const header = process.env.TRUSTED_CLIENT_IP_HEADER;
    const client = header
      ? request.headers.get(header) || "unknown"
      : "local-shared";
    const stored = storeInquiry(parsed.value, client);
    if (stored.limited)
      return NextResponse.json(
        { error: "limited" },
        { status: 429, headers: { "Retry-After": "3600" } },
      );
    after(() => notifyInquiry(stored.id, parsed.value));
    return NextResponse.json(
      { ok: true, id: stored.id },
      { status: 201, headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }
}
