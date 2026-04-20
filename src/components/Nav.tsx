import { getTranslations } from "next-intl/server";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export async function Nav() {
  const t = await getTranslations("Nav");

  return (
    <header className="nav">
      <a className="brand" href="#top">
        <span className="brand-mark" aria-hidden>
          <svg viewBox="0 0 32 32" width="28" height="28">
            <circle cx="16" cy="16" r="5" fill="currentColor" />
            <ellipse
              cx="16"
              cy="16"
              rx="13"
              ry="4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              transform="rotate(-20 16 16)"
            />
          </svg>
        </span>
        <span className="brand-text">
          <span className="brand-name">{t("brandName")}</span>
          <span className="brand-role">{t("brandRole")}</span>
        </span>
      </a>
      <nav className="nav-links">
        <a href="#about">{t("about")}</a>
        <a href="#skills">{t("stack")}</a>
        <a href="#missions">{t("missions")}</a>
        <a href="#projects">{t("projects")}</a>
        <a href="#contact">{t("contact")}</a>
      </nav>
      <div className="nav-actions">
        <LocaleSwitcher />
        <ThemeToggle label={t("themeToggleLabel")} title={t("themeToggleTitle")} />
        <a className="btn btn-ghost" href="#contact">
          {t("letsTalk")}
        </a>
      </div>
    </header>
  );
}
