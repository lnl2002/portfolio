import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, SITE_LOCALES, SITE_URL, localeUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(
    SITE_LOCALES.map((l) => [l, localeUrl(l)])
  ) as Record<string, string>;

  return SITE_LOCALES.map((locale) => ({
    url: localeUrl(locale),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: locale === DEFAULT_LOCALE ? 1 : 0.9,
    alternates: {
      languages: {
        ...languages,
        "x-default": SITE_URL,
      },
    },
  }));
}
