import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { LogoMark } from "@/components/LogoMark";
import { NavScroll } from "@/components/NavScroll";
import { SITE_EMAIL } from "@/lib/site";

export async function Nav() {
  const t = await getTranslations("Nav");
  const links = [
    ["story", t("story")],
    ["work", t("work")],
    ["impact", t("results")],
    ["career", t("career")],
  ] as const;

  return (
    <>
      <a className="skip" href="#story">{t("skip")}</a>
      <header className="nav" id="nav">
        <NavScroll />
        <div className="wrap nav__bar">
          <a className="brand" href="#top" aria-label={t("home")}>
            <LogoMark />Lại Ngọc Lâm
          </a>
          <nav className="nav__links" aria-label={t("main")}>
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>
          <div className="nav__actions">
            <LocaleSwitcher />
            <a className="btn btn--blue btn--sm" href={`mailto:${SITE_EMAIL}`}>{t("email")}</a>
          </div>
        </div>
      </header>
    </>
  );
}
