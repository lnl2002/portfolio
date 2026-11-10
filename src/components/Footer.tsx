import { getTranslations } from "next-intl/server";
import { SITE_LINKEDIN } from "@/lib/site";

export async function Footer() {
  const t = await getTranslations("Footer");
  const n = await getTranslations("Nav");
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <span>&copy; 2026 Lại Ngọc Lâm · {t("rights")}</span>
        <nav aria-label={t("label")}>
          <a href="#work">{n("work")}</a>
          <a href="#career">{n("career")}</a>
          <a href={SITE_LINKEDIN}>LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
