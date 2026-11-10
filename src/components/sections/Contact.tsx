import { getTranslations } from "next-intl/server";
import { Arrow } from "@/components/Arrow";
import { CV_PATH, SITE_EMAIL, SITE_LINKEDIN } from "@/lib/site";

export async function Contact() {
  const t = await getTranslations("Contact");
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <p className="label">{t("label")}</p>
        <h2 id="contact-h">{t("heading")}</h2>
        <p className="contact__lede">{t("lede")}</p>
        <a className="mail" href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}<Arrow width={1.4} /></a>
        <div className="row">
          <a className="btn btn--line" href={CV_PATH} download>{t("cv")}</a>
          <a className="btn btn--line" href={SITE_LINKEDIN} target="_blank" rel="noopener">{t("linkedin")}</a>
        </div>
      </div>
    </section>
  );
}
