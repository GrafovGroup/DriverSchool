import Link from "next/link";
import { notFound } from "next/navigation";
import { services, staticPages, isLang, copy, pageTitles } from "@/lib/content";
import { cities, provinces, isIndexableLocation } from "@/lib/locations";
import { metadataFor, origin } from "@/lib/site";
import {
  ServicePage,
  LocationsPage,
  LocalPage,
  ContactPage,
  DiscoveryPage,
} from "@/components/pages";
import { About, Legal } from "@/components/legal";
type Props = {
  params: Promise<{ lang: string; slug: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};
function lookup(slug: string[]) {
  if (slug.length === 1)
    return (
      services.some((s) => s.id === slug[0]) || staticPages.includes(slug[0])
    );
  return (
    slug.length === 2 &&
    slug[0] === "locations" &&
    [...cities, ...provinces].some((v) => v.id === slug[1])
  );
}
export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLang(lang) || !lookup(slug)) return {};
  const service = services.find((s) => s.id === slug[0]);
  const place = [...cities, ...provinces].find((v) => v.id === slug[1]);
  const title = place
    ? `${copy[lang].local} ${place.name[lang]}`
    : service?.title[lang] || pageTitles(lang)[slug[0]];
  return metadataFor(
    lang,
    slug.join("/"),
    title,
    service?.intro[lang],
    !place || isIndexableLocation(place.id),
  );
}
export default async function Page({ params, searchParams }: Props) {
  const { lang, slug } = await params;
  if (!isLang(lang) || !lookup(slug)) notFound();
  const search = await searchParams;
  const defaults = Object.fromEntries(
    Object.entries(search)
      .filter(([, v]) => typeof v === "string")
      .map(([k, v]) => [k, String(v).slice(0, 100)]),
  );
  const service = services.find((s) => s.id === slug[0]);
  const place = [...cities, ...provinces].find((v) => v.id === slug[1]);
  const title =
    place?.name[lang] || service?.title[lang] || pageTitles(lang)[slug[0]];
  let content;
  if (service) content = <ServicePage lang={lang} service={service} />;
  else if (place) content = <LocalPage lang={lang} id={place.id} />;
  else
    switch (slug[0]) {
      case "locations":
        content = <LocationsPage lang={lang} />;
        break;
      case "find-a-school":
        content = (
          <DiscoveryPage
            lang={lang}
            category={defaults.category}
            city={defaults.city}
          />
        );
        break;
      case "contact":
        content = <ContactPage lang={lang} defaults={defaults} />;
        break;
      case "about":
        content = <About lang={lang} />;
        break;
      case "privacy":
      case "terms":
        content = <Legal lang={lang} kind={slug[0]} />;
    }
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: copy[lang].home,
            item: `${origin}/${lang}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: `${origin}/${lang}/${slug.join("/")}`,
          },
        ],
      },
      ...(service
        ? [
            {
              "@type": "Service",
              name: service.title[lang],
              description: service.intro[lang],
              serviceType:
                lang === "en"
                  ? "Training discovery and inquiry"
                  : "Recherche de formations et demandes de renseignements",
              provider: { "@type": "Organization", name: "DriverSchool.ca" },
              areaServed: { "@type": "Country", name: "Canada" },
            },
          ]
        : []),
    ],
  };
  return (
    <>
      <div className="breadcrumbs">
        <Link href={`/${lang}`}>{copy[lang].home}</Link>
        <span>/</span>
        {place && (
          <>
            <Link href={`/${lang}/locations`}>{copy[lang].locations}</Link>
            <span>/</span>
          </>
        )}
        <span>{title}</span>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replaceAll("<", "\\u003c"),
        }}
      />
      {content}
    </>
  );
}
