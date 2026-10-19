import { copy, type Lang } from "./content";
export const origin = process.env.SITE_URL || "https://driverschool.ca";
export function verifiedPhone() {
  const phone = process.env.CONTACT_PHONE;
  return process.env.CONTACT_PHONE_VERIFIED === "true" &&
    phone &&
    /^\+[1-9]\d{7,14}$/.test(phone)
    ? phone
    : null;
}
export function metadataFor(
  lang: Lang,
  path: string,
  title: string,
  description?: string,
  index = true,
) {
  const route = path ? `/${path}` : "";
  return {
    title,
    description: description || `${title}. ${copy[lang].intro}`,
    alternates: {
      canonical: `${origin}/${lang}${route}`,
      languages: {
        "en-CA": `${origin}/en${route}`,
        "fr-CA": `${origin}/fr${route}`,
        "x-default": `${origin}/en${route}`,
      },
    },
    robots: { index, follow: true },
    openGraph: {
      title,
      description: description || copy[lang].intro,
      url: `${origin}/${lang}${route}`,
      siteName: "DriverSchool.ca",
      locale: lang === "fr" ? "fr_CA" : "en_CA",
      type: "website" as const,
    },
  };
}
