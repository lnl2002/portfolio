"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const active = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <nav
      aria-label={t("label")}
      className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400"
    >
      {routing.locales.map((cur, idx) => (
        <span key={cur} className="flex items-center gap-3">
          {idx > 0 && <span aria-hidden className="text-zinc-300 dark:text-zinc-700">/</span>}
          <Link
            href={pathname}
            locale={cur}
            aria-current={cur === active ? "page" : undefined}
            className={
              cur === active
                ? "font-semibold text-zinc-950 dark:text-zinc-50"
                : "hover:text-zinc-900 dark:hover:text-zinc-100"
            }
          >
            {t(cur)}
          </Link>
        </span>
      ))}
    </nav>
  );
}
