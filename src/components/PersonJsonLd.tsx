import {
  SITE_EMAIL,
  SITE_LINKEDIN,
  SITE_LOCATION,
  SITE_NAME,
  SITE_PHONE,
  SITE_ROLE,
  SITE_URL,
} from "@/lib/site";

export function PersonJsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    alternateName: "Lai Ngoc Lam",
    jobTitle: SITE_ROLE,
    url: SITE_URL,
    image: `${SITE_URL}/avatar.jpg`,
    email: `mailto:${SITE_EMAIL}`,
    telephone: SITE_PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hanoi",
      addressRegion: "Cầu Giấy",
      addressCountry: "VN",
      streetAddress: "Nghĩa Đô",
    },
    sameAs: [SITE_LINKEDIN],
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
    description: `${SITE_ROLE} based in ${SITE_LOCATION}. Three years shipping products to 50,000+ merchants; six months leading a five-person team across Shopify apps, data platforms, and performance tooling.`,
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
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en", "vi"],
    author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
