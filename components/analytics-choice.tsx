"use client";
import { useState } from "react";
import type { Lang } from "@/lib/content";
export function AnalyticsChoice({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [allowed, setAllowed] = useState(false);
  return (
    <div className="analytics-choice">
      <button
        type="button"
        onClick={() => {
          try {
            setAllowed(localStorage.getItem("ds-analytics-consent") === "yes");
          } catch {}
          setOpen(!open);
        }}
        aria-expanded={open}
      >
        {lang === "en"
          ? "PRIVACY PREFERENCES"
          : "PRÉFÉRENCES DE CONFIDENTIALITÉ"}
      </button>
      {open && (
        <div>
          <p>
            {lang === "en"
              ? "Optional measurement of inquiry and call actions. No contact details are included. You can change this choice at any time."
              : "Mesure facultative des actions de demande et d’appel, sans coordonnées personnelles. Vous pouvez modifier votre choix à tout moment."}
          </p>
          <label className="consent">
            <input
              type="checkbox"
              checked={allowed}
              onChange={(e) => {
                setAllowed(e.target.checked);
                try {
                  localStorage.setItem(
                    "ds-analytics-consent",
                    e.target.checked ? "yes" : "no",
                  );
                } catch {}
              }}
            />
            {lang === "en"
              ? "Allow optional measurement"
              : "Autoriser la mesure facultative"}
          </label>
        </div>
      )}
    </div>
  );
}
