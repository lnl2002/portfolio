import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { LangSync } from "@/components/LangSync";
import { Nav } from "@/components/Nav";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/PersonJsonLd";
import { Footer } from "@/components/Footer";
import { DEFAULT_LOCALE, SITE_NAME, SITE_URL, localeUrl } from "@/lib/site";

// Child openGraph/twitter objects replace the root opengraph-image, so point to it explicitly.
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Lại Ngọc Lâm — Full-Stack Engineer, Shopify apps",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const title = t("title");
  const description = t("description");
  const canonical = localeUrl(locale);
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, localeUrl(l)])
  ) as Record<string, string>;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s — ${SITE_NAME}`,
    },
    description,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    keywords: [
      "Lại Ngọc Lâm",
      "Lai Ngoc Lam",
      "tech lead",
      "full-stack developer",
      "Hanoi developer",
      "Vietnam developer",
      "Shopify app developer",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Google Cloud",
      "BigQuery",
      "portfolio",
    ],
    category: "technology",
    alternates: {
      canonical,
      languages: { ...languages, "x-default": SITE_URL },
    },
    openGraph: {
      type: "profile",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: locale === "vi" ? ["en_US"] : ["vi_VN"],
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { email: false, telephone: false, address: false },
    referrer: "origin-when-cross-origin",
    verification: {
      google: "google932b35139c1a20d4",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <LangSync />
      <PersonJsonLd locale={locale} />
      {locale === DEFAULT_LOCALE ? <WebsiteJsonLd /> : null}
      <Nav />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
