import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="hero">
      <div className="hero-coords">
        <span>{t("coordsLat")}</span>
        <span className="dot" />
        <span>{t("coordsLng")}</span>
        <span className="dot" />
        <span>{t("coordsPlace")}</span>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            <span>{t("availability")}</span>
          </div>
          <h1 className="hero-title">
            {t.rich("titleRich", {
              em: (c) => <em>{c}</em>,
              grad: (c) => <span className="grad">{c}</span>,
            })}
          </h1>
          <p className="hero-sub">
            {t.rich("subRich", {
              b: (c) => <strong>{c}</strong>,
            })}
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              <span>{t("seeMissions")}</span>
              <svg viewBox="0 0 24 24" width="16" height="16">
                <path
                  d="M5 12h14m-5-5 5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="btn btn-outline" href={`mailto:${t("email")}`}>
              {t("email")}
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <b>
                {t("statYearsNum")}
                <span>{t("statYearsUnit")}</span>
              </b>
              <em>{t("statYearsLabel")}</em>
            </div>
            <div>
              <b>{t("statMerchantsNum")}</b>
              <em>{t("statMerchantsLabel")}</em>
            </div>
            <div>
              <b>{t("statInfraNum")}</b>
              <em>{t("statInfraLabel")}</em>
            </div>
            <div>
              <b>{t("statInstallsNum")}</b>
              <em>{t("statInstallsLabel")}</em>
            </div>
          </div>
        </div>

        <div className="orbit">
          <div className="orbit-ring r1" />
          <div className="orbit-ring r2" />
          <div className="orbit-ring r3" />
          <div className="orbit-ring r4" />

          <div className="planet">
            <div className="planet-core">
              <div className="planet-shade" />
              <div className="planet-label">
                <span>{t("planetLabelSpan")}</span>
                <em>{t("planetLabelEm")}</em>
              </div>
            </div>
          </div>

          <div className="satellite s1">
            <span>React</span>
          </div>
          <div className="satellite s2">
            <span>Node</span>
          </div>
          <div className="satellite s3">
            <span>Next.js</span>
          </div>
          <div className="satellite s4">
            <span>GCP</span>
          </div>
          <div className="satellite s5">
            <span>TS</span>
          </div>
        </div>
      </div>

      <div className="hero-ticker" aria-hidden>
        <div className="ticker-track">
          {[0, 1].flatMap((pass) =>
            [
              <span key={`log-${pass}`}>{t("tickerLog")}</span>,
              <span key={`s1a-${pass}`}>★</span>,
              <span key={`i1-${pass}`}>{t("tickerItem1")}</span>,
              <span key={`s2a-${pass}`}>★</span>,
              <span key={`i2-${pass}`}>{t("tickerItem2")}</span>,
              <span key={`s3a-${pass}`}>★</span>,
              <span key={`i3-${pass}`}>{t("tickerItem3")}</span>,
              <span key={`s4a-${pass}`}>★</span>,
              <span key={`i4-${pass}`}>{t("tickerItem4")}</span>,
              <span key={`s5a-${pass}`}>★</span>,
            ]
          )}
        </div>
      </div>
    </section>
  );
}
