import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function About() {
  const t = await getTranslations("About");

  return (
    <section className="about" id="about">
      <div className="section-head">
        <span className="sec-num">01</span>
        <span className="sec-label">{t("sectionLabel")}</span>
        <span className="sec-rule" />
      </div>

      <div className="about-grid">
        <div className="about-lede">
          <h2>
            {t.rich("headingRich", {
              em: (c) => <em>{c}</em>,
            })}
          </h2>
          <p>{t("para1")}</p>
          <p>{t("para2")}</p>
        </div>

        <aside className="about-card">
          <div className="about-avatar" aria-hidden="false">
            <Image
              src="/avatar.jpg"
              alt={t("avatarAlt")}
              width={128}
              height={128}
              sizes="112px"
              priority
            />
          </div>
          <header>
            <span className="card-dot" />
            <h3>{t("cardTitle")}</h3>
          </header>
          <ul>
            <li>
              <span>{t("cardRoleLabel")}</span>
              <b>{t("cardRoleValue")}</b>
            </li>
            <li>
              <span>{t("cardBasedLabel")}</span>
              <b>{t("cardBasedValue")}</b>
            </li>
            <li>
              <span>{t("cardStackLabel")}</span>
              <b>{t("cardStackValue")}</b>
            </li>
            <li>
              <span>{t("cardDegreeLabel")}</span>
              <b>{t("cardDegreeValue")}</b>
            </li>
            <li>
              <span>{t("cardStatusLabel")}</span>
              <b className="live">
                <i />
                {t("cardStatusValue")}
              </b>
            </li>
          </ul>
          <footer>
            <a href="https://www.linkedin.com/in/lai-ngoc-lam" target="_blank" rel="noopener">
              {t("linkLinkedin")}
            </a>
            <a href="mailto:laingoclam3112@gmail.com">{t("linkEmail")}</a>
            <a href="tel:+84984068859">{t("linkPhone")}</a>
            <a className="link-cv" href="/Lai_Ngoc_Lam_CV.pdf" download>
              {t("linkCv")}
            </a>
          </footer>
        </aside>
      </div>
    </section>
  );
}
