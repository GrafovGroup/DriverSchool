import { readFileSync } from "node:fs";
import { validateSchool } from "../lib/directory.ts";
const path = process.argv[2];
if (!path)
  throw new Error(
    "Usage: npm run directory:validate -- /path/to/listings.json",
  );
const data: unknown = JSON.parse(readFileSync(path, "utf8"));
if (!Array.isArray(data) || !data.every((row) => validateSchool(row)))
  throw new Error(
    "Import rejected: each listing needs HTTPS sources, reviewer, and a verification date within 90 days.",
  );
const ids = data.map((row) => row.id);
if (new Set(ids).size !== ids.length) throw new Error("Duplicate school IDs");
console.log(
  `${data.length} records validated. This does not publish or independently verify the source facts.`,
);
