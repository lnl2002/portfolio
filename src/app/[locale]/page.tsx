import { setRequestLocale } from "next-intl/server";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Missions } from "@/components/sections/Missions";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { SITE_LOCATION, SITE_ROLE } from "@/lib/site";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="top">
      <h1 className="sr-only">
        Lại Ngọc Lâm (Lai Ngoc Lam) — {SITE_ROLE} · {SITE_LOCATION}
      </h1>
      <Hero />
      <About />
      <Skills />
      <Missions />
      <Projects />
      <Contact />
    </main>
  );
}
