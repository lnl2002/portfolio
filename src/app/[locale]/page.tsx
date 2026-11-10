import { setRequestLocale } from "next-intl/server";
import { Career } from "@/components/sections/Career";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { Story } from "@/components/sections/Story";
import { Work } from "@/components/sections/Work";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="top">
      <Hero />
      <Story />
      <Work />
      <Results />
      <Career />
      <Contact />
    </main>
  );
}
