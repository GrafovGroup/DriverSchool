import { services } from "./content.ts";
import { provinces } from "./locations.ts";
export const fieldLimits = {
  name: 100,
  email: 254,
  phone: 30,
  city: 100,
  province: 50,
  category: 60,
  licence: 80,
  timeframe: 80,
  message: 3000,
  website: 200,
} as const;
export type Inquiry = Record<keyof typeof fieldLimits, string> & {
  consent: boolean;
  lang: "en" | "fr";
};
export function validateInquiry(
  input: unknown,
): { ok: true; value: Inquiry } | { ok: false; errors: string[] } {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { ok: false, errors: ["form"] };
  const raw = input as Record<string, unknown>;
  const errors: string[] = [];
  const value = {} as Inquiry;
  for (const [key, limit] of Object.entries(fieldLimits)) {
    const v = raw[key];
    if (v !== undefined && typeof v !== "string") {
      errors.push(key);
      continue;
    }
    const str = typeof v === "string" ? v.trim() : "";
    if (
      str.length > limit ||
      /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(str)
    )
      errors.push(key);
    value[key as keyof typeof fieldLimits] = str;
  }
  if (value.name?.length < 2) errors.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)) errors.push("email");
  if (!value.city) errors.push("city");
  if (value.phone && !/^[+\d\s().-]{7,30}$/.test(value.phone))
    errors.push("phone");
  if (!provinces.some((p) => p.id === value.province)) errors.push("province");
  if (!services.some((s) => s.id === value.category)) errors.push("category");
  if (raw.consent !== true) errors.push("consent");
  if (raw.lang !== "en" && raw.lang !== "fr") errors.push("lang");
  if (value.website) errors.push("form");
  value.lang = raw.lang as "en" | "fr";
  value.consent = raw.consent === true;
  return errors.length
    ? { ok: false, errors: [...new Set(errors)] }
    : { ok: true, value };
}
