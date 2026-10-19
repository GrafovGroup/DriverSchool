import { services, staticPages } from "@/lib/content";
import { cities, provinces, isIndexableLocation } from "@/lib/locations";
import { origin } from "@/lib/site";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    ...services.map((v) => v.id),
    ...staticPages,
    ...[...cities, ...provinces]
      .filter((v) => isIndexableLocation(v.id))
      .map((v) => `locations/${v.id}`),
  ];
  return paths.flatMap((path) =>
    ["en", "fr"].map((lang) => ({
      url: `${origin}/${lang}${path ? `/${path}` : ""}`,
      alternates: {
        languages: {
          "en-CA": `${origin}/en${path ? `/${path}` : ""}`,
          "fr-CA": `${origin}/fr${path ? `/${path}` : ""}`,
        },
      },
    })),
  );
}
