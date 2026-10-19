# Deployment guide

Deployment and DNS changes require the owner's explicit authorization. None have been performed.

## Hosting requirements

Choose a Canadian-region Linux VPS or a host that supports a long-running Node 24+ process and a persistent local disk. Confirm the actual WHC plan supports these requirements; ordinary static/PHP shared hosting is insufficient. This build is not a static export because forms require a server. Multi-instance/serverless deployment requires replacing the SQLite adapter with a managed durable database and shared rate limiting first.

1. Provision a non-root application account, private data directory and encrypted backups.
2. Install Node 24+, clone the approved revision and run `npm ci`.
3. Provide environment variables using the host's secret manager or restricted environment file. Set `SITE_URL=https://driverschool.ca` before building; it controls canonical URLs and sitemap.
4. Set `INQUIRY_DB_PATH` to a persistent absolute path outside the public directory, for example `/var/lib/driverschool/inquiries.sqlite`.
5. Configure HTTPS and a reverse proxy. Strip client-supplied `X-Real-IP` and write the actual peer address; set `TRUSTED_CLIENT_IP_HEADER=x-real-ip`. For CDN/proxy chains, derive the peer only from trusted intermediaries. Rate limiting is otherwise trivially bypassable.
6. Configure and test the approved notification endpoint/token. Without notifications, require an operational process to inspect the private inbox daily.
7. Run `npm run check:env`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.
8. Run `npm start` under the host's process supervisor. Expose only the HTTPS proxy publicly; keep Node bound to the private interface. Add HSTS at the proxy after confirming HTTPS and subdomain requirements.
9. Run end-to-end inquiries in EN/FR using designated test addresses. Verify saved rows, notification receipt, origin checks, rate limits and persistence after restart. Remove only these explicitly identified test records.
10. Schedule `npm run retention` daily under the same environment. Confirm database/backups/export retention, restore tests, permissions and monitoring. Monitor response 5xx, disk space, pending/failed notifications and SQLite lock errors.

## Domain and email

After authorization, obtain the actual host address, update apex A/AAAA and `www` DNS as needed, provision TLS, and redirect `www` consistently to the canonical host. Do not guess DNS records. If the notification provider sends email, configure its exact SPF/DKIM records, DMARC policy and verified recipient/sender. Verify delivery and spam placement. No email is sent directly by the app without a configured webhook.

## Search and quality

Verify the domain in Search Console using the owner's account and the supplied DNS token. Submit `/sitemap.xml`. Inspect both languages, `hreflang`, canonical URLs and index exclusions. Do not remove `noindex` on generic local pages until distinctive, current and sourced content is added.

Before release, test actual hosting performance, keyboard navigation, screen readers and 200%/400% zoom. Automated checks and responsive inspection do not certify WCAG compliance. Confirm the owner's legal entity/privacy contact and review EN/FR policies against actual processing arrangements. These are operational tasks; do not add launch-status warnings to customer-facing pages.

## Security notes

Production CSP prohibits eval and frames; Next's inline bootstrap currently requires `unsafe-inline`. Nonce-based CSP is an optional later hardening step with rendering tradeoffs. No untrusted HTML is rendered. Form bodies are capped at 16 KiB; per-field limits are enforced server-side. Honeypot and rate limits reduce spam but are not a substitute for edge-level abuse controls.

As of the implementation audit, runtime packages have no reported vulnerabilities. The ESLint development dependency chain includes the unpatched `braces <=3.0.3` advisory GHSA-vfj7-8cjw-p6xm. Do not downgrade Next.js merely to suppress this tooling-only advisory. Track upstream patches and never pass untrusted glob patterns to lint tooling.
