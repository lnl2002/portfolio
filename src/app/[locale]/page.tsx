import { setRequestLocale } from "next-intl/server";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Missions } from "@/components/sections/Missions";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

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
      <About />
      <Skills />
      <Missions />
      <Projects />
      <Contact />
    </main>
  );
}
