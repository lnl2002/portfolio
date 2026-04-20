"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const active = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <nav aria-label={t("label")} className="locale-switcher">
      {routing.locales.map((cur, idx) => (
        <span key={cur} className="ls-group">
          {idx > 0 && <span aria-hidden className="ls-sep">/</span>}
          <Link
            href={pathname}
            locale={cur}
            aria-current={cur === active ? "page" : undefined}
            className={cur === active ? "ls-link is-active" : "ls-link"}
          >
            {t(cur)}
          </Link>
        </span>
      ))}
    </nav>
  );
}
