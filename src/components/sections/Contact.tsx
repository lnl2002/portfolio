import { getTranslations } from "next-intl/server";

export async function Contact() {
  const t = await getTranslations("Contact");

  return (
    <section className="contact" id="contact">
      <div className="section-head">
        <span className="sec-num">05</span>
        <span className="sec-label">{t("sectionLabel")}</span>
        <span className="sec-rule" />
      </div>

      <div className="contact-panel">
        <div className="cp-left">
          <h2>
            {t.rich("headingRich", {
              em: (c) => <em>{c}</em>,
              br: () => <br />,
            })}
          </h2>
          <p>{t("body")}</p>
          <a className="btn btn-primary lg" href="mailto:laingoclam3112@gmail.com">
            <span>{t("cta")}</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M4 6h16v12H4z M4 6l8 7 8-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <dl className="cp-right">
          <div>
            <dt>{t("emailLabel")}</dt>
            <dd>
              <a href="mailto:laingoclam3112@gmail.com">laingoclam3112@gmail.com</a>
            </dd>
          </div>
          <div>
            <dt>{t("phoneLabel")}</dt>
            <dd>
              <a href="tel:+84984068859">{t("phoneDisplay")}</a>
            </dd>
          </div>
          <div>
            <dt>{t("linkedinLabel")}</dt>
            <dd>
              <a href="https://www.linkedin.com/in/lai-ngoc-lam" target="_blank" rel="noopener">
                {t("linkedinDisplay")}
              </a>
            </dd>
          </div>
          <div>
            <dt>{t("addressLabel")}</dt>
            <dd>{t("address")}</dd>
          </div>
        </dl>
      </div>

      <footer className="foot">
        <span>{t("copyright")}</span>
        <span className="foot-motto">{t("motto")}</span>
        <span>{t("builtWith")}</span>
      </footer>
    </section>
  );
}
