export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lai-ngoc-lam.site"
).replace(/\/$/, "");

export const SITE_NAME = "Lại Ngọc Lâm";
export const SITE_ROLE = "Full-Stack Developer";
export const SITE_LOCATION = "Hanoi, Vietnam";
export const SITE_EMAIL = "laingoclam3112@gmail.com";
export const SITE_PHONE = "+84984068859";
export const SITE_LINKEDIN = "https://www.linkedin.com/in/lai-ngoc-lam";
export const SITE_GITHUB: string | undefined = undefined;
export const SITE_FPT_PRESS =
  "https://daihoc.fpt.edu.vn/hoc-thuat-2/recruitme-giai-phap-tu-dong-hoa-tuyen-dung-cua-sinh-vien-truong-dai-hoc-fpt/";

export const SITE_NAME_ALTS = [
  "Lai Ngoc Lam",
  "Lâm Lại",
  "Lam Lai",
  "Ngọc Lâm",
  "Ngoc Lam",
] as const;

export const SITE_LOCALES = ["en", "vi"] as const;
export const DEFAULT_LOCALE: (typeof SITE_LOCALES)[number] = "en";

export function localeUrl(locale: string) {
  return locale === DEFAULT_LOCALE ? SITE_URL : `${SITE_URL}/${locale}`;
}
