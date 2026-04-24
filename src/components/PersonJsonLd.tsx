import {
  SITE_EMAIL,
  SITE_FPT_PRESS,
  SITE_GITHUB,
  SITE_LINKEDIN,
  SITE_LOCATION,
  SITE_NAME,
  SITE_NAME_ALTS,
  SITE_PHONE,
  SITE_ROLE,
  SITE_URL,
} from "@/lib/site";

export function PersonJsonLd({ locale }: { locale: string }) {
  const sameAs = [SITE_LINKEDIN, SITE_GITHUB, SITE_FPT_PRESS].filter(
    (v): v is string => typeof v === "string" && v.length > 0
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    alternateName: [...SITE_NAME_ALTS],
    givenName: "Lâm",
    familyName: "Lại",
    jobTitle: SITE_ROLE,
    url: SITE_URL,
    mainEntityOfPage: SITE_URL,
    image: `${SITE_URL}/avatar.jpg`,
    email: `mailto:${SITE_EMAIL}`,
    telephone: SITE_PHONE,
    nationality: { "@type": "Country", name: "Vietnam" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hanoi",
      addressRegion: "Cầu Giấy",
      addressCountry: "VN",
      streetAddress: "Nghĩa Đô",
    },
    sameAs,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Shopify apps",
      "Google Cloud Platform",
      "BigQuery",
      "Data analytics",
    ],
    knowsLanguage: [
      { "@type": "Language", name: "Vietnamese", alternateName: "vi" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Avada Group",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "FPT University",
      url: "https://daihoc.fpt.edu.vn",
    },
    description: `Lại Ngọc Lâm (Lai Ngoc Lam) — ${SITE_ROLE} based in ${SITE_LOCATION}. Three years shipping products to 50,000+ merchants; six months leading a five-person team across Shopify apps, data platforms, and performance tooling.`,
    inLanguage: locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: [...SITE_NAME_ALTS],
    url: SITE_URL,
    description: `Portfolio of Lại Ngọc Lâm (Lai Ngoc Lam) — ${SITE_ROLE} based in ${SITE_LOCATION}.`,
    inLanguage: ["en", "vi"],
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
