import { isAbsolute } from "node:path";
const issues = [];
let url;
try {
  url = new URL(process.env.SITE_URL);
  if (
    url.protocol !== "https:" &&
    !["localhost", "127.0.0.1"].includes(url.hostname)
  )
    issues.push("SITE_URL must use HTTPS");
} catch {
  issues.push("SITE_URL must be an absolute URL");
}
if (!process.env.INQUIRY_DB_PATH || !isAbsolute(process.env.INQUIRY_DB_PATH))
  issues.push(
    "INQUIRY_DB_PATH must point to an absolute path on persistent storage",
  );
if (
  url &&
  !["localhost", "127.0.0.1"].includes(url.hostname) &&
  !process.env.TRUSTED_CLIENT_IP_HEADER
)
  issues.push(
    "Configure a client IP header overwritten by the trusted reverse proxy",
  );
if (
  process.env.CONTACT_PHONE_VERIFIED === "true" &&
  !/^\+[1-9]\d{7,14}$/.test(process.env.CONTACT_PHONE || "")
)
  issues.push("Verified phone must be in E.164 format");
if (process.env.INQUIRY_WEBHOOK_URL) {
  try {
    if (new URL(process.env.INQUIRY_WEBHOOK_URL).protocol !== "https:")
      issues.push("Webhook must use HTTPS");
  } catch {
    issues.push("Invalid webhook URL");
  }
  if (!process.env.INQUIRY_WEBHOOK_TOKEN)
    issues.push("Webhook token is required");
}
const days = Number(process.env.RETENTION_DAYS || 90);
if (!Number.isInteger(days) || days < 1 || days > 365)
  issues.push("Retention must be between 1 and 365 days");
if (issues.length) {
  console.error(issues.join("\n"));
  process.exit(1);
}
console.log(
  "Deployment environment checks passed. Verify disk persistence, proxy header ownership and notification routing operationally.",
);
