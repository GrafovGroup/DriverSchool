import Image from "next/image";
import Link from "next/link";
import { copy, services, type Lang, type Service } from "@/lib/content";
import { cities, provinces } from "@/lib/locations";
import { Finder, LocationSearch } from "./discovery";
import { InquiryForm } from "./inquiry-form";
export function CTA({
  lang,
  category = "",
  city = "",
  province = "",
}: {
  lang: Lang;
  category?: string;
  city?: string;
  province?: string;
}) {
  const c = copy[lang];
  return (
    <section className="cta">
      <div>
        <span className="eyebrow">{c.tagline}</span>
        <h2>{c.ready}</h2>
        <p>{c.readyBody}</p>
      </div>
      <Link
        className="button light"
        href={`/${lang}/contact?${new URLSearchParams({ category, city, province })}`}
      >
        {c.request} <span>↗</span>
      </Link>
    </section>
  );
}
export function ServiceCards({
  lang,
  compact = false,
}: {
  lang: Lang;
  compact?: boolean;
}) {
  return (
    <div className={`service-grid ${compact ? "compact" : ""}`}>
      {services.slice(0, compact ? 3 : 7).map((s, i) => (
        <Link
          className={`service-card card-${i}`}
          key={s.id}
          href={`/${lang}/${s.id}`}
        >
          <span className="service-number">
            {s.symbol} <span aria-hidden="true">↗</span>
          </span>
          <h3>{s.title[lang]}</h3>
          <p>{s.short[lang]}</p>
          <span className="text-link">
            {copy[lang].explore} <span>→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
export function Home({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="blue-dot" />
            {c.eyebrow}
          </div>
          <h1>
            {c.headline.split("\n").map((line, i) => (
              <span className={i ? "blue" : ""} key={line}>
                {line}
              </span>
            ))}
          </h1>
          <p>{c.intro}</p>
          <Link className="button" href="#find-lessons">
            {c.find} <span>↗</span>
          </Link>
          <div className="hero-note">
            <span className="tiny-route">↳</span>
            {lang === "en"
              ? "For first-timers. For fresh starts. For what’s next."
              : "Pour vos débuts. Vos retours. Vos nouveaux défis."}
          </div>
        </div>
        <div className="hero-art">
          <Image
            src={lang === "en" ? "/route-atlas.svg" : "/route-quebec.svg"}
            alt={
              lang === "en"
                ? "Original road map illustration with a car following a blue route"
                : "Illustration d’une carte routière avec une voiture suivant un parcours bleu"
            }
            width={760}
            height={650}
            priority
          />
          <div className="map-label">
            <span className="label-icon">↗</span>
            <div>
              <small>
                {lang === "en" ? "NEXT DESTINATION" : "PROCHAINE DESTINATION"}
              </small>
              <strong>
                {lang === "en"
                  ? "A more confident you."
                  : "La confiance au volant."}
              </strong>
            </div>
          </div>
          <div className="map-coordinate">
            {lang === "en"
              ? "43.6532° N / 79.3832° W"
              : "45.5019° N / 73.5674° W"}
          </div>
        </div>
      </section>
      <section id="find-lessons" className="finder-section">
        <div className="finder-heading">
          <span className="eyebrow">
            {lang === "en"
              ? "LET’S FIND YOUR DIRECTION"
              : "TROUVONS VOTRE DIRECTION"}
          </span>
          <span>
            {lang === "en"
              ? "One starting point. Plenty of possibilities."
              : "Un point de départ. Plusieurs possibilités."}
          </span>
        </div>
        <Finder lang={lang} />
      </section>
      <div className="principles">
        <span>
          ↗{" "}
          {lang === "en"
            ? "Every stage of driving"
            : "Toutes les étapes de la conduite"}
        </span>
        <span>
          ◎{" "}
          {lang === "en"
            ? "Local needs, national perspective"
            : "Besoins locaux, perspective nationale"}
        </span>
        <span>
          ↔ {lang === "en" ? "English & French" : "Français et anglais"}
        </span>
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {lang === "en" ? "CHOOSE YOUR PATH" : "CHOISISSEZ VOTRE PARCOURS"}
            </span>
            <h2>{c.training}</h2>
          </div>
          <p>{c.trainingIntro}</p>
        </div>
        <ServiceCards lang={lang} />
      </section>
      <section id="how-it-works" className="how-section">
        <div>
          <span className="eyebrow">{c.nav[2]}</span>
          <h2>{c.how}</h2>
          <p>
            {lang === "en"
              ? "A little clarity makes the next step easier."
              : "Un peu de clarté facilite la prochaine étape."}
          </p>
          <Link href={`/${lang}/about`} className="text-link">
            {c.about.toUpperCase()} ↗
          </Link>
        </div>
        <ol className="steps">
          {c.steps.map(([title, body], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {lang === "en"
                ? "FROM COAST TO COAST TO COAST"
                : "D’UN OCÉAN À L’AUTRE"}
            </span>
            <h2>{c.location}</h2>
          </div>
          <p>{c.locationIntro}</p>
        </div>
        <div className="province-feature">
          {provinces.slice(0, 4).map((p, i) => (
            <Link href={`/${lang}/locations/${p.id}`} key={p.id}>
              <span className="province-code">
                0{i + 1} / {p.code}
              </span>
              <h3>{p.name[lang]}</h3>
              <span>
                {cities
                  .filter((v) => v.province === p.id)
                  .slice(0, 2)
                  .map((v) => v.name[lang])
                  .join(" · ")}
              </span>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
        <Link className="text-link" href={`/${lang}/locations`}>
          {c.allLocations} →
        </Link>
      </section>
      <CTA lang={lang} />
    </>
  );
}
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-hero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
  );
}
export function ServicePage({
  lang,
  service: s,
}: {
  lang: Lang;
  service: Service;
}) {
  const c = copy[lang];
  const index = services.findIndex((v) => v.id === s.id);
  return (
    <>
      <PageHero
        eyebrow={`${s.symbol} / ${c.services.toUpperCase()}`}
        title={s.title[lang]}
        intro={s.intro[lang]}
      />
      <section className={`section service-detail layout-${index}`}>
        <div>
          <span className="eyebrow">{c.learn}</span>
          <h2>{s.short[lang]}</h2>
          <ul className="topic-list">
            {s.topics.map((t, i) => (
              <li key={t.en}>
                <span>0{i + 1}</span>
                {t[lang]}
              </li>
            ))}
          </ul>
        </div>
        <aside className="qualification">
          <span className="eyebrow">{c.consider}</span>
          <p>{s.note[lang]}</p>
          <Link className="button" href={`/${lang}/contact?category=${s.id}`}>
            {c.request} ↗
          </Link>
        </aside>
      </section>
      <section className="section faq">
        <h2>{c.questions}</h2>
        {s.faq.map(([q, a]) => (
          <details key={q.en}>
            <summary>
              {q[lang]}
              <span>+</span>
            </summary>
            <p>{a[lang]}</p>
          </details>
        ))}
      </section>
      <CTA lang={lang} category={s.id} />
    </>
  );
}
export function LocationsPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <>
      <PageHero
        eyebrow={c.locations.toUpperCase()}
        title={c.location}
        intro={c.locationIntro}
      />
      <section className="section">
        <div className="province-pills">
          {provinces.map((p) => (
            <Link key={p.id} href={`/${lang}/locations/${p.id}`}>
              {p.name[lang]} ↗
            </Link>
          ))}
        </div>
        <LocationSearch lang={lang} />
      </section>
      <CTA lang={lang} />
    </>
  );
}
export function LocalPage({ lang, id }: { lang: Lang; id: string }) {
  const c = copy[lang];
  const city = cities.find((v) => v.id === id);
  const province = provinces.find((v) => v.id === (city?.province || id))!;
  const name = city?.name[lang] || province.name[lang];
  const related = cities.filter(
    (v) => v.province === province.id && v.id !== id,
  );
  return (
    <>
      <PageHero
        eyebrow={c.guide}
        title={`${c.local} ${name}`}
        intro={city?.focus[lang] || c.locationIntro}
      />
      <section className="section local-detail">
        <div>
          <h2>{province.name[lang]}</h2>
          {province.pathway[lang] && (
            <p className="licence-path">{province.pathway[lang]}</p>
          )}
          <p>{c.official}</p>
          <a
            className="text-link"
            href={province.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.source} ↗
          </a>
          {province.reviewed && <p className="muted">{c.updated}</p>}
        </div>
        <aside className="qualification">
          <h3>{c.localQuestions}</h3>
          <p>{c.availability}</p>
          <ul>
            <li>
              {lang === "en"
                ? "Which licence do you currently hold?"
                : "Quel permis détenez-vous actuellement?"}
            </li>
            <li>
              {lang === "en"
                ? "Where would you like to practise?"
                : "Où souhaitez-vous pratiquer?"}
            </li>
            <li>
              {lang === "en"
                ? "Which language and schedule suit you?"
                : "Quelle langue et quel horaire vous conviennent?"}
            </li>
          </ul>
        </aside>
      </section>
      <section className="section">
        <h2>{c.training}</h2>
        <ServiceCards lang={lang} compact />
      </section>
      {related.length > 0 && (
        <section className="section">
          <h2>{c.related}</h2>
          <div className="province-pills">
            {related.map((v) => (
              <Link key={v.id} href={`/${lang}/locations/${v.id}`}>
                {v.name[lang]} ↗
              </Link>
            ))}
          </div>
        </section>
      )}
      <CTA lang={lang} city={city?.name[lang]} province={province.id} />
    </>
  );
}
export function DiscoveryPage({
  lang,
  category,
  city,
}: {
  lang: Lang;
  category?: string;
  city?: string;
}) {
  const c = copy[lang];
  const service = services.find((v) => v.id === category);
  return (
    <>
      <PageHero eyebrow={c.find} title={c.directory} intro={c.directoryBody} />
      <section className="section">
        <Finder lang={lang} />
        {(service || city) && (
          <div className="selection">
            <h2>
              {service?.title[lang] || c.results}
              {city ? ` · ${city}` : ""}
            </h2>
            <p>{c.availability}</p>
            <Link
              className="button"
              href={`/${lang}/contact?${new URLSearchParams({ category: service?.id || "", city: city || "" })}`}
            >
              {c.request} ↗
            </Link>
          </div>
        )}
        <h2>{c.results}</h2>
        <ServiceCards lang={lang} />
        <p className="notice">{c.directoryNote}</p>
      </section>
    </>
  );
}
export function ContactPage({
  lang,
  defaults,
}: {
  lang: Lang;
  defaults: Record<string, string>;
}) {
  const c = copy[lang];
  return (
    <>
      <PageHero eyebrow={c.contact} title={c.ready} intro={c.readyBody} />
      <section className="section contact-layout">
        <InquiryForm lang={lang} defaults={defaults} />
        <aside>
          <h2>
            {lang === "en"
              ? "A little about your next step."
              : "Votre prochaine étape, en bref."}
          </h2>
          <p>{c.notBooking}</p>
          <p>{c.availability}</p>
          <div className="note-box">
            <h3>
              {lang === "en" ? "Have a specific goal?" : "Un objectif précis?"}
            </h3>
            <p>
              {lang === "en"
                ? "Mention your licence stage, preferred lesson language and the skills you want to build. Please don’t send licence numbers, medical records or payment information."
                : "Indiquez votre étape du permis, la langue souhaitée et les habiletés à développer. N’envoyez pas de numéro de permis, de dossier médical ni de renseignements de paiement."}
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
