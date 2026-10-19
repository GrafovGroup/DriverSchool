import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { validateInquiry } from "../lib/inquiry.ts";
import { openDatabase, storeInquiry, purgeBefore } from "../lib/storage.ts";
import { validateSchool } from "../lib/directory.ts";
import { cities, provinces, isIndexableLocation } from "../lib/locations.ts";
import { services } from "../lib/content.ts";
const input = {
  name: "Test Driver",
  email: "driver@example.com",
  phone: "",
  city: "Toronto",
  province: "ontario",
  category: "driving-lessons",
  licence: "G1",
  timeframe: "Next month",
  message: "Parking practice",
  website: "",
  consent: true,
  lang: "en",
};
test("validation accepts both languages and rejects malformed, overlong and missing values", () => {
  assert.equal(validateInquiry(input).ok, true);
  assert.equal(validateInquiry({ ...input, lang: "fr" }).ok, true);
  for (const patch of [
    { consent: false },
    { email: "bad" },
    { category: "fake" },
    { province: "fake" },
    { name: "x" },
    { city: "" },
    { message: "x".repeat(3001) },
    { phone: { nested: true } },
    { lang: "de" },
    { website: "spam" },
    { email: "a@b.ca\nBcc: x@y.ca" },
  ])
    assert.equal(validateInquiry({ ...input, ...patch }).ok, false);
  assert.equal(validateInquiry(null).ok, false);
});
test("durable storage, atomic rate limits and retention", () => {
  const dir = mkdtempSync(join(tmpdir(), "ds-test-"));
  const path = join(dir, "test.sqlite");
  try {
    const parsed = validateInquiry(input);
    assert.ok(parsed.ok);
    for (let i = 0; i < 5; i++)
      assert.equal(
        storeInquiry(parsed.value, "client-1", path, 1000).limited,
        false,
      );
    assert.equal(
      storeInquiry(parsed.value, "client-1", path, 1000).limited,
      true,
    );
    assert.equal(
      storeInquiry(parsed.value, "client-2", path, 1000).limited,
      false,
    );
    assert.equal(
      storeInquiry(parsed.value, "client-1", path, 3601000).limited,
      false,
    );
    const db = openDatabase(path);
    assert.equal(db.prepare("SELECT count(*) AS n FROM inquiries").get()?.n, 7);
    db.close();
    assert.equal(Number(purgeBefore(2000, path)), 6);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
test("directory rejects unverified and stale records", () => {
  assert.equal(validateSchool({ name: "Invented" }), false);
  const good = {
    id: "example",
    name: "Example",
    city: "Toronto",
    province: "ON",
    website: "https://example.org",
    sourceUrl: "https://example.org/source",
    verifiedAt: new Date().toISOString(),
    verifiedBy: "reviewer",
  };
  assert.equal(validateSchool(good), true);
  assert.equal(validateSchool({ ...good, verifiedAt: "2020-01-01" }), false);
  assert.equal(validateSchool({ ...good, approvalClaim: "approved" }), false);
});
test("bilingual content and national coverage with index quality gates", () => {
  assert.equal(provinces.length, 13);
  for (const id of [
    "toronto",
    "ottawa",
    "vancouver",
    "calgary",
    "montreal",
    "quebec-city",
    "halifax",
    "iqaluit",
    "whitehorse",
    "yellowknife",
    "moncton",
    "st-johns",
  ])
    assert.ok(cities.some((c) => c.id === id));
  assert.equal(isIndexableLocation("mississauga"), false);
  assert.equal(isIndexableLocation("toronto"), true);
  for (const service of services) {
    assert.ok(service.title.en && service.title.fr);
    assert.ok(service.intro.en !== service.intro.fr);
    assert.ok(service.faq.length >= 2);
  }
  assert.equal(
    new Set([...provinces, ...cities].map((v) => v.id)).size,
    provinces.length + cities.length,
  );
});
