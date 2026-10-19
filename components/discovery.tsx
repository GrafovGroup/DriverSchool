"use client";
import { useState } from "react";
import Link from "next/link";
import { copy, services, type Lang } from "@/lib/content";
import { cities, provinces } from "@/lib/locations";
export function Finder({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <form className="finder" action={`/${lang}/find-a-school`}>
      <label>
        {c.category}
        <select name="category" defaultValue="driving-lessons">
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title[lang]}
            </option>
          ))}
        </select>
      </label>
      <label>
        {c.city}
        <input
          name="city"
          placeholder={
            lang === "en" ? "e.g. Toronto or M5V" : "p. ex. Montréal ou H2X"
          }
          maxLength={100}
        />
      </label>
      <button className="button" type="submit">
        {c.find}
        <span>↗</span>
      </button>
    </form>
  );
}
export function LocationSearch({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const [query, setQuery] = useState("");
  const [province, setProvince] = useState("");
  const filtered = cities.filter(
    (v) =>
      (!province || v.province === province) &&
      `${v.name.en} ${v.name.fr}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(
          query
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase(),
        ),
  );
  return (
    <>
      <div className="search-controls">
        <label>
          {c.searchCity}
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
          />
        </label>
        <label>
          {c.province}
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          >
            <option value="">{c.any}</option>
            {provinces.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name[lang]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div aria-live="polite" className="result-count">
        {filtered.length}{" "}
        {lang === "en"
          ? filtered.length === 1
            ? "area"
            : "areas"
          : filtered.length === 1
            ? "région"
            : "régions"}
      </div>
      <div className="city-grid">
        {filtered.map((city) => (
          <Link
            className="city-link"
            key={city.id}
            href={`/${lang}/locations/${city.id}`}
          >
            <span>
              {city.name[lang]}
              <small>
                {provinces.find((p) => p.id === city.province)?.name[lang]}
              </small>
            </span>
            <span>↗</span>
          </Link>
        ))}
      </div>
      {!filtered.length && <p>{c.empty}</p>}
    </>
  );
}
