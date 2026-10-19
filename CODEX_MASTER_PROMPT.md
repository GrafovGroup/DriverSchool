# DriverSchool.ca — Autonomous Codex Master Build
Owner: Grafov Group | Repository: GrafovGroup/DriverSchool | Domain: DriverSchool.ca

## Mission
Build a production-ready, premium, original Canadian national driving education discovery and lead-generation website. Customers discover driving lessons and training services, submit an inquiry or call. No prices, checkout, payment, account requirement or fake live booking. Fulfilment through appropriately licensed independent training providers only where confirmed. Never falsely imply DriverSchool.ca is an approved school, instructor or government body.

## Codex operating instructions
Inspect the repository first. If empty, initialize a modern maintainable TypeScript Next.js App Router site with Tailwind and minimal dependencies. Work autonomously phase by phase, choosing sensible defaults, testing each phase and recording results in IMPLEMENTATION_REPORT.md. Keep OWNER_ACTIONS.md for only items genuinely requiring owner intervention (verified phone, email routing credentials, domain/DNS, legal business particulars, partner approvals, deployment). Do not stop for ordinary technical or design decisions. Preserve existing work if present. Commit changes in logical stages when possible. Never commit secrets or pretend deployment succeeded.

## Brand and design
Develop a DISTINCT visual identity, not a recolored Grafov Group clone. Premium navy, bright blue, white and subtle amber; original road/route motif, sophisticated typography, custom responsive hero and editorial layouts, authentic properly licensed photos or original SVG/CSS illustrations. Uppercase navigation and CTA labels. Mobile-first, responsive, fast, keyboard accessible, WCAG 2.2 AA target, reduced-motion aware, meaningful micro-interactions. Logo and favicon in scalable SVG. Use a real differentiated layout for each service template.

## Business and conversion
Primary CTA: FIND DRIVING LESSONS; secondary: REQUEST INFORMATION; CALL NOW only if a verified phone number is configured. Present a service and location selector, not a misleading booking engine. Contact form fields: name, email, optional phone, city/postal code, province, training category, licence stage if relevant, preferred timeframe, message, privacy consent. Server validation, anti-spam honeypot, rate limiting, accessible errors, durable submission storage or delivery, notification routing via configurable provider, confirmation only on success, graceful failure. No unverified promises of availability. No fake testimonials, instructors, offices, ratings, accreditation or partnerships.

## Categories
Passenger: beginner, refresher, private lessons, highway, parking, winter and defensive driving.
Road test preparation: Ontario G1/G2/G and correct province-specific licence terminology; mock tests and test-day vehicles only where verified available.
Government-approved beginner education: provider-specific qualifications and careful regulatory disclaimers.
Commercial: truck, air brakes, bus, fleet/corporate safety and provincial licence categories.
Motorcycle and specialized training.
Each category has useful educational content, FAQs, qualification/eligibility notes, and an inquiry CTA.

## Bilingual: mandatory from day one
Complete English and Quebec-appropriate French live at launch: content, forms, validation, menus, SEO, transactional messages, accessibility, legal and privacy pages. Use /en and /fr routes (or clearly documented equivalent), persistent language switch, localized canonical, hreflang, x-default and sitemaps. No untranslated English strings on French routes. French language should sound natural in Quebec.

## National location SEO
Support every province and territory, major Canadian city and surrounding municipalities. Priority clusters: Toronto/GTA (Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Ajax, Pickering, Newmarket), Ottawa, Hamilton, Kitchener-Waterloo, London, Niagara, Vancouver/Metro Vancouver, Victoria, Calgary, Edmonton, Winnipeg, Montreal/Greater Montreal, Quebec City, Halifax, Saskatoon, Regina, St. John's, Charlottetown, Fredericton, Moncton, Whitehorse, Yellowknife, Iqaluit.
Build typed province/city data and scalable location templates. Publish indexable pages only when useful, distinct, accurate local content exists; avoid thin keyword-stuffed duplicates. Province-specific licensing terms, practical local FAQs, internal links, structured breadcrumbs, local intent CTAs. Frame national coverage as accepting inquiries and verifying local fulfilment, not operating physical offices nationwide.

## Site map
Homepage; Driving Lessons; Road Test Preparation; Beginner Driver Education; Defensive Driving; Truck/Commercial Training; Motorcycle Training; Corporate/Fleet Training; Find a School; Locations; About; Contact; Privacy; Terms. School directory may display ONLY sourced, verifiable factual listings with attribution and verification date. No invented schools or fabricated reviews. If no verified data is available, provide useful search/discovery UI and contact intake instead.

## SEO, trust and security
Unique metadata, OpenGraph, robots, XML sitemap, hreflang, canonical, structured Service/Organization/BreadcrumbList as appropriate. Never use LocalBusiness schema for nonexistent offices. Honest partner disclosures and privacy handling; consent-aware analytics, event tracking for calls and inquiries; Search Console instructions. Secure input handling, environment validation, no sensitive data in client logs, sensible retention controls and CASL/PIPEDA-aware design. Avoid asserting legal compliance without review.

## Phased execution
PHASE 1A: Repository inspection, project initialization, design system, original logo, bilingual app shell, homepage, core components, documentation.
PHASE 1B: Complete service pages, information architecture, internal navigation and conversion copy in EN/FR.
PHASE 1C: Inquiry workflow end to end, validation, anti-spam, storage/delivery adapters, verified phone CTA configuration and tests.
PHASE 1D: Province/city architecture, priority metro pages and French localized location pages, unique copy.
PHASE 2A: Scalable nationwide location expansion, quality gates preventing thin pages, location discovery and search.
PHASE 2B: Verified school directory data model, source tracking, admin-safe import and factual profiles; do not publish unsourced listings.
PHASE 2C: SEO, schema, technical accessibility, performance, conversion instrumentation, security and regression tests.
PHASE 3: Deployment readiness for Canadian hosting/WHC or other chosen host; provide deployment guide, environment template, DNS and email setup instructions. Never change DNS or deploy without explicit authorization.

## Acceptance criteria
npm install, lint, typecheck, test and production build pass (document exact commands/results). No broken links, fake details, untranslated routes or nonfunctional CTA. Forms truly persist/send or are visibly disabled with configuration explanation; never silently discard inquiries. Provide README.md, .env.example, IMPLEMENTATION_REPORT.md and OWNER_ACTIONS.md. At each phase append implementation summary, modified paths, validation output, known issues and next phase. Work through all phases without requiring owner confirmation unless genuinely blocked; leave external-input items for the end.
