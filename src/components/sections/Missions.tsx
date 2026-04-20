import { getTranslations } from "next-intl/server";

const M3_CHIPS = ["React", "Koa", "Firebase", "Cloud Run", "Cloud Functions", "BigQuery", "Pub/Sub", "Cloud Storage"];
const M2_CHIPS = ["Java", "PL/SQL", "Oracle", "TypeScript", "Vue.js", "NestJS", "MySQL"];

export async function Missions() {
  const t = await getTranslations("Missions");

  return (
    <section className="missions" id="missions">
      <div className="section-head">
        <span className="sec-num">03</span>
        <span className="sec-label">{t("sectionLabel")}</span>
        <span className="sec-rule" />
      </div>

      <ol className="timeline">
        <li className="mission live">
          <div className="m-marker">
            <i />
          </div>
          <div className="m-meta">
            <span className="m-code">{t("m3.code")}</span>
            <time>{t("m3.date")}</time>
            <span className="m-status">{t("m3.status")}</span>
          </div>
          <div className="m-body">
            <h3>
              {t("m3.title")} <span>{t("m3.titleSub")}</span>
            </h3>
            <p className="m-lede">{t("m3.lede")}</p>
            <ul>
              {["bullet1Rich", "bullet2Rich", "bullet3Rich", "bullet4Rich"].map((k) => (
                <li key={k}>
                  {t.rich(`m3.${k}`, {
                    b: (c) => <b>{c}</b>,
                    em: (c) => <em>{c}</em>,
                  })}
                </li>
              ))}
            </ul>
            <div className="m-chips">
              {M3_CHIPS.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </li>

        <li className="mission">
          <div className="m-marker" />
          <div className="m-meta">
            <span className="m-code">{t("m2.code")}</span>
            <time>{t("m2.date")}</time>
            <span className="m-status">{t("m2.status")}</span>
          </div>
          <div className="m-body">
            <h3>
              {t("m2.title")} <span>{t("m2.titleSub")}</span>
            </h3>
            <ul>
              {["bullet1Rich", "bullet2Rich"].map((k) => (
                <li key={k}>
                  {t.rich(`m2.${k}`, {
                    b: (c) => <b>{c}</b>,
                    em: (c) => <em>{c}</em>,
                  })}
                </li>
              ))}
            </ul>
            <div className="m-chips">
              {M2_CHIPS.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </li>

        <li className="mission">
          <div className="m-marker" />
          <div className="m-meta">
            <span className="m-code">{t("m1.code")}</span>
            <time>{t("m1.date")}</time>
            <span className="m-status">{t("m1.status")}</span>
          </div>
          <div className="m-body">
            <h3>
              {t("m1.title")} <span>{t("m1.titleSub")}</span>
            </h3>
            <p>
              {t.rich("m1.bodyRich", {
                em: (c) => <em>{c}</em>,
              })}
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}
