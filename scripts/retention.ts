import { purgeBefore } from "../lib/storage.ts";
const days = Number(process.env.RETENTION_DAYS || 90);
if (!Number.isInteger(days) || days < 1 || days > 365)
  throw new Error("RETENTION_DAYS must be 1–365");
console.log(
  `Purged ${purgeBefore(Date.now() - days * 86400000)} expired inquiries.`,
);
