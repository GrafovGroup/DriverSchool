// Run against an already-started local production server: node tests/routes.mjs
import assert from "node:assert/strict";
import { services, staticPages } from "../lib/content.ts";
import { cities, provinces } from "../lib/locations.ts";
const base = process.env.TEST_URL || "http://127.0.0.1:3000";
const paths = [
  "",
  ...services.map((v) => v.id),
  ...staticPages,
  ...[...cities, ...provinces].map((v) => `locations/${v.id}`),
];
let count = 0;
const internal = new Set();
for (const lang of ["en", "fr"])
  for (const path of paths) {
    const url = `/${lang}${path ? "/" + path : ""}`;
    const response = await fetch(base + url);
    assert.equal(response.status, 200, url);
    const text = await response.text();
    assert.ok(text.includes(`lang="${lang}-CA"`), url);
    assert.ok(text.includes('rel="canonical"'), url);
    if (path === "locations/mississauga")
      assert.ok(text.includes("noindex"), url);
    for (const match of text.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g))
      if (!match[1].startsWith("/_next")) internal.add(match[1]);
    count++;
  }
for (const path of internal) {
  const r = await fetch(base + path);
  assert.equal(r.status, 200, path);
}
for (const path of [
  "/en/not-a-page",
  "/fr/not-a-page",
  "/zz",
  "/en/locations/not-a-city",
]) {
  assert.equal((await fetch(base + path)).status, 404, path);
}
const site = await (await fetch(base + "/sitemap.xml")).text();
assert.ok(!site.includes("mississauga"));
assert.ok(site.includes("toronto"));
const root = await fetch(base + "/", {
  redirect: "manual",
  headers: { Cookie: "language=fr" },
});
assert.equal(root.headers.get("location"), "/fr");
const data = {
  name: "Synthetic route test",
  email: "qa@example.invalid",
  city: "Toronto",
  province: "ontario",
  category: "driving-lessons",
  consent: true,
  lang: "en",
};
const post = (body, origin = base) =>
  fetch(base + "/api/inquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify(body),
  });
assert.equal((await post(data, "https://invalid.example")).status, 403);
assert.equal((await post({ ...data, consent: false })).status, 422);
assert.equal((await post({ ...data, website: "spam" })).status, 422);
assert.equal((await post({ ...data, message: "x".repeat(17000) })).status, 413);
assert.equal((await post(data)).status, 201);
console.log(
  `PASS: ${count} localized pages, ${internal.size} linked paths, 404s, language preference, sitemap quality gates, API origin/validation/honeypot/body-limit/persistence.`,
);
