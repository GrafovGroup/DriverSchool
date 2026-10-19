import { notFound } from "next/navigation";
import { Home } from "@/components/pages";
import { copy, isLang } from "@/lib/content";
import { metadataFor, origin } from "@/lib/site";
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return metadataFor(
    lang,
    "",
    lang === "en"
      ? "Find driving lessons across Canada"
      : "Trouvez des cours de conduite au Canada",
    copy[lang].intro,
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "DriverSchool.ca",
            url: origin,
            description: copy[lang].disclosure,
          }).replaceAll("<", "\\u003c"),
        }}
      />
      <Home lang={lang} />
    </>
  );
}
