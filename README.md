# DriverSchool.ca

Bilingual Canadian driving-education discovery and inquiry website, built from `CODEX_MASTER_PROMPT.md`.

## Run locally

Use Node 24+ and npm. On this workstation, Node is bundled at `/Users/grafov/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`; npm was bootstrapped from the official npm registry into `/tmp/driverschool-npm/package/bin/npm-cli.js` because npm was absent from PATH.

```sh
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000/en` or `/fr`. Match `SITE_URL` to the browser origin, including port. Root `/` remembers the selected language with a preference cookie.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run check:env
npm start
```

`check:env` is a required deployment preflight; its absolute persistent database path requirement is intentionally stricter than local development. Run `next typegen` or build after moving routes before a standalone typecheck.

## Architecture

- Next.js 16 App Router, TypeScript, React 19, Tailwind 4 with a custom CSS design system.
- `lib/content.ts`: complete bilingual service copy and UI labels.
- `lib/locations.ts`: all 13 provinces/territories and priority cities; indexability gates.
- `components/`: page layouts, navigation, search and accessible inquiry form.
- `app/api/inquiries/route.ts`: bounded JSON parsing, origin checking, validation, durable storage and rate limiting.
- `lib/storage.ts`: Node SQLite, atomic submission/rate-limit transaction, retention utilities.
- `lib/notification.ts`: optional HTTPS notification adapter. Storage success is independent of notification success.
- `lib/directory.ts`: source-backed school data contract; no fabricated listings are shipped.
- `public/`: two original, placement-specific route illustrations and the SVG brand icon.

## Inquiry operations

SQLite requires a persistent disk and a single application host. Do not deploy this storage adapter on ephemeral/serverless storage or share a SQLite file across independent machines. Protect the data directory and backups; never put them under `public/`. Use encrypted volumes and least-privilege host accounts.

Submissions save consent version, language and notification state. Default limit: 5 accepted inquiries per client per hour. Without a trusted proxy header, local submissions share a conservative bucket. The deployment proxy MUST strip and overwrite the configured client header. Do not trust arbitrary forwarded headers.

Set `INQUIRY_WEBHOOK_URL` and `INQUIRY_WEBHOOK_TOKEN` for team notifications. The webhook receives personal data over HTTPS and must be an approved processor. The UUID is an idempotency key. Failed notifications remain marked in the database; they do not lose the inquiry. There is no public admin endpoint.

```sh
npm run inbox -- /secure/new-file.json
npm run retention
```

Inbox export refuses to overwrite an existing file and creates it with mode 0600. Monitor stored/failed/pending submissions and reconcile them with the team's follow-up system. Arrange a daily retention job with a 90-day default and apply the same retention to exports/backups. No scheduled job is installed by this repository. Inquiries must not be forwarded to a training provider without the consent described in the privacy policy.

## Content and SEO

English/French equivalents share descriptive route slugs under `/en` and `/fr`. Body copy, metadata, forms and validation are localized. Six priority city guides and six provincial guides currently pass the index gate. Other locations remain useful inquiry landing pages with `noindex,follow` and are excluded from the sitemap until researched. Government source links are recorded in the typed data; do not infer approval of DriverSchool.ca or a provider.

`npm run directory:validate -- /path/to/listings.json` rejects missing sources, stale/future dates, absent reviewer attribution and unsupported approval claims. It is a validation tool, not proof of the underlying facts or a public import API. Publishing profiles requires independently verified records; no school profile routes are exposed while the dataset is empty.

## Analytics

No third-party analytics or advertising runs. Privacy preferences default to off. With opt-in, the client dispatches `driverschool:conversion` events (`inquiry_started`, `inquiry_saved`, `call_clicked`) containing only the event name. These remain in the browser until an approved collector is integrated. Never attach contact values, query strings or messages to analytics.

## Documentation

See `IMPLEMENTATION_REPORT.md`, `OWNER_ACTIONS.md`, `DEPLOYMENT.md` and `ASSET_USAGE.md` for verification, release requirements and asset provenance. The website has not been deployed.
