"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { copy, services, type Lang } from "@/lib/content";
import { provinces } from "@/lib/locations";
import { track } from "@/lib/analytics";
import { fieldLimits } from "@/lib/inquiry";
const messages = {
  en: {
    name: "Full name",
    email: "Email address",
    phone: "Phone (optional)",
    licence: "Current licence or stage (optional)",
    timeframe: "Preferred timeframe (optional)",
    message: "What would you like to work on? (optional)",
    consent:
      "I agree that DriverSchool.ca may use these details to respond to my inquiry and assess training options. I understand this is not marketing consent.",
    send: "SEND MY INQUIRY",
    sending: "SENDING…",
    success: "Your inquiry has been received.",
    successBody:
      "Your details have been saved securely for follow-up. Availability and arrangements still need to be confirmed.",
    error: "We couldn’t save your inquiry. Please try again.",
    invalid: "Please check the highlighted fields.",
    fieldError: "Please enter a valid value.",
    limited: "Too many inquiries have been sent. Please try again in an hour.",
    required: "Fields marked * are required.",
    reference: "Your reference",
  },
  fr: {
    name: "Nom complet",
    email: "Adresse courriel",
    phone: "Téléphone (facultatif)",
    licence: "Permis ou étape actuelle (facultatif)",
    timeframe: "Période souhaitée (facultatif)",
    message: "Que souhaitez-vous travailler? (facultatif)",
    consent:
      "J’accepte que DriverSchool.ca utilise ces renseignements pour répondre à ma demande et évaluer les options de formation. Ce consentement ne vise pas les communications promotionnelles.",
    send: "ENVOYER MA DEMANDE",
    sending: "ENVOI EN COURS…",
    success: "Votre demande a été reçue.",
    successBody:
      "Vos renseignements ont été enregistrés de façon sécuritaire pour le suivi. Les disponibilités et les modalités restent à confirmer.",
    error: "Votre demande n’a pas pu être enregistrée. Veuillez réessayer.",
    invalid: "Veuillez vérifier les champs indiqués.",
    fieldError: "Veuillez saisir une valeur valide.",
    limited:
      "Trop de demandes ont été envoyées. Veuillez réessayer dans une heure.",
    required: "Les champs marqués d’un * sont obligatoires.",
    reference: "Votre numéro de référence",
  },
};
export function InquiryForm({
  lang,
  defaults,
}: {
  lang: Lang;
  defaults: Record<string, string>;
}) {
  const c = copy[lang];
  const m = messages[lang];
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [fields, setFields] = useState<string[]>([]);
  const [id, setId] = useState("");
  const status = useRef<HTMLDivElement>(null);
  const errorProps = (key: string) => ({
    "aria-invalid": fields.includes(key),
    "aria-describedby": fields.includes(key) ? `${key}-error` : undefined,
  });
  const err = (key: string) =>
    fields.includes(key) ? (
      <span id={`${key}-error`} className="field-error">
        {m.fieldError}
      </span>
    ) : null;
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    setState("sending");
    track("inquiry_started");
    setFields([]);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, consent: data.consent === "on", lang }),
      });
      const result = await res.json();
      if (!res.ok) {
        setFields(result.fields || []);
        setError(
          res.status === 429
            ? m.limited
            : res.status === 422
              ? m.invalid
              : m.error,
        );
        setState("error");
      } else {
        setId(result.id);
        setState("success");
        track("inquiry_saved");
      }
    } catch {
      setError(m.error);
      setState("error");
    }
    setTimeout(() => status.current?.focus(), 0);
  }
  return (
    <div>
      <div ref={status} tabIndex={-1} role="status" aria-live="polite">
        {state === "success" ? (
          <div className="success">
            <span>✓</span>
            <h2>{m.success}</h2>
            <p>{m.successBody}</p>
            <p>
              {m.reference}: <code>{id}</code>
            </p>
          </div>
        ) : state === "error" ? (
          <p className="error">{error}</p>
        ) : null}
      </div>
      {state !== "success" && (
        <form className="inquiry-form" onSubmit={submit}>
          <p className="muted">{m.required}</p>
          <div className="form-grid">
            {(["name", "email", "phone", "city"] as const).map((key) => (
              <label key={key} htmlFor={key}>
                {key === "city" ? c.city : m[key]}
                {key !== "phone" ? " *" : ""}
                <input
                  id={key}
                  name={key}
                  type={
                    key === "email" ? "email" : key === "phone" ? "tel" : "text"
                  }
                  autoComplete={
                    key === "name"
                      ? "name"
                      : key === "email"
                        ? "email"
                        : key === "phone"
                          ? "tel"
                          : "address-level2"
                  }
                  required={key !== "phone"}
                  minLength={key === "name" ? 2 : undefined}
                  maxLength={fieldLimits[key]}
                  defaultValue={defaults[key] || ""}
                  {...errorProps(key)}
                />
                {err(key)}
              </label>
            ))}
            <label htmlFor="province">
              {c.province} *
              <select
                id="province"
                name="province"
                defaultValue={defaults.province || ""}
                required
                {...errorProps("province")}
              >
                <option value="">
                  {lang === "en"
                    ? "Select province or territory"
                    : "Choisir une province ou un territoire"}
                </option>
                {provinces.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name[lang]}
                  </option>
                ))}
              </select>
              {err("province")}
            </label>
            <label htmlFor="category">
              {c.category} *
              <select
                id="category"
                name="category"
                defaultValue={defaults.category || ""}
                required
                {...errorProps("category")}
              >
                <option value="">{c.choose}</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title[lang]}
                  </option>
                ))}
              </select>
              {err("category")}
            </label>
            {(["licence", "timeframe"] as const).map((key) => (
              <label key={key} htmlFor={key}>
                {m[key]}
                <input
                  name={key}
                  id={key}
                  maxLength={fieldLimits[key]}
                  {...errorProps(key)}
                />
                {err(key)}
              </label>
            ))}
          </div>
          <label htmlFor="message">
            {m.message}
            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={3000}
              {...errorProps("message")}
            />
            {err("message")}
          </label>
          <div className="honeypot" aria-hidden="true">
            <label>
              {lang === "en" ? "Leave blank" : "Laisser vide"}
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <label className="consent">
            <input
              type="checkbox"
              name="consent"
              required
              {...errorProps("consent")}
            />
            <span>
              {m.consent} <Link href={`/${lang}/privacy`}>{c.privacy}</Link> *
            </span>
          </label>
          {err("consent")}
          <button
            className="button"
            disabled={state === "sending"}
            type="submit"
          >
            {state === "sending" ? m.sending : m.send} ↗
          </button>
          <p className="muted">{c.notBooking}</p>
        </form>
      )}
    </div>
  );
}
