"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnalyticsChoice } from "./analytics-choice";
import { track } from "@/lib/analytics";
import { useState } from "react";
import { copy, type Lang } from "@/lib/content";
export function Header({ lang, phone }: { lang: Lang; phone: string | null }) {
  const c = copy[lang];
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const other = lang === "en" ? "fr" : "en";
  return (
    <>
      <a className="skip" href="#main">
        {c.skip}
      </a>
      <div className="utility">
        <span>
          {lang === "en"
            ? "YOUR ROAD. YOUR PACE."
            : "VOTRE ROUTE. VOTRE RYTHME."}
        </span>
        <span>
          {lang === "en"
            ? "CANADIAN DRIVING EDUCATION"
            : "FORMATION À LA CONDUITE AU CANADA"}{" "}
          <span className="maple">✦</span>
        </span>
      </div>
      <header className="header">
        <Link
          className="brand"
          href={`/${lang}`}
          aria-label="DriverSchool.ca"
          onClick={() => setOpen(false)}
        >
          <span className="logo-mark" aria-hidden="true">
            D<span />
          </span>
          <span>
            DriverSchool<span className="brand-ca">.ca</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          {open ? (lang === "en" ? "CLOSE" : "FERMER") : "MENU"}{" "}
          {open ? "−" : "+"}
        </button>
        <nav
          id="main-nav"
          aria-label={
            lang === "en" ? "Main navigation" : "Navigation principale"
          }
          className={open ? "nav open" : "nav"}
        >
          <Link
            onClick={() => setOpen(false)}
            href={`/${lang}/driving-lessons`}
          >
            {c.nav[0]}
          </Link>
          <Link onClick={() => setOpen(false)} href={`/${lang}/locations`}>
            {c.nav[1]}
          </Link>
          <Link onClick={() => setOpen(false)} href={`/${lang}#how-it-works`}>
            {c.nav[2]}
          </Link>
          <Link
            lang={other}
            href={path.replace(/^\/(en|fr)/, `/${other}`)}
            onClick={() => {
              document.cookie = `language=${other};path=/;max-age=31536000;SameSite=Lax`;
              setOpen(false);
            }}
            className="lang"
            aria-label={
              lang === "en" ? "Passer au français" : "Switch to English"
            }
          >
            {other.toUpperCase()}
          </Link>
          {phone ? (
            <a
              className="button small"
              href={`tel:${phone}`}
              onClick={() => track("call_clicked")}
            >
              {c.phone}
            </a>
          ) : (
            <Link
              onClick={() => setOpen(false)}
              className="button small"
              href={`/${lang}/contact`}
            >
              {c.request} <span>↗</span>
            </Link>
          )}
        </nav>
      </header>
    </>
  );
}
export function Footer({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <footer>
      <div className="footer-top">
        <div>
          <Link className="brand" href={`/${lang}`}>
            DriverSchool<span className="brand-ca">.ca</span>
          </Link>
          <p>{c.footer}</p>
        </div>
        <div className="footer-links">
          {[
            ["driving-lessons", c.services],
            ["locations", c.locations],
            ["about", c.about],
            ["contact", c.contact],
            ["privacy", c.privacy],
            ["terms", c.terms],
          ].map(([path, title]) => (
            <Link key={path} href={`/${lang}/${path}`}>
              {title.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
      <p className="disclosure">{c.disclosure}</p>
      <AnalyticsChoice lang={lang} />
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} DriverSchool.ca · Grafov Group
        </span>
        <span>{c.tagline} ↗</span>
      </div>
    </footer>
  );
}
