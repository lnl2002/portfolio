import { getTranslations } from "next-intl/server";

const RECRUITME_STACK = ["Next.js", "TypeScript", "Express", "MongoDB", "AWS Textract", "Gemini", "Twilio"];
const SEO_STACK = ["React", "Koa", "Cloud Run", "Pub/Sub", "Cloud Storage"];
const SPEED_STACK = ["React", "Koa", "Firebase", "Cloud Functions"];
const DATA_STACK = ["BigQuery", "Pub/Sub", "Cloud Functions", "Node"];
const SPEED_BARS = ["18%", "34%", "48%", "60%", "78%", "100%"];

export async function Projects() {
  const t = await getTranslations("Projects");

  return (
    <section className="projects" id="projects">
      <div className="section-head">
        <span className="sec-num">04</span>
        <span className="sec-label">{t("sectionLabel")}</span>
        <span className="sec-rule" />
      </div>

      <div className="project-grid">
        <article className="project featured">
          <div className="p-tag">{t("recruitme.tag")}</div>
          <header>
            <h3>{t("recruitme.title")}</h3>
            <p>{t("recruitme.desc")}</p>
          </header>
          <div className="p-visual" aria-hidden>
            <div className="pv-window">
              <div className="pv-chrome">
                <i />
                <i />
                <i />
                <span>{t("recruitme.previewUrl")}</span>
              </div>
              <div className="pv-body">
                <div className="pv-row">
                  <span className="pv-avatar" />
                  <span className="pv-col">
                    <b>Nguyễn Minh Anh</b>
                    <em>Frontend Engineer · 3y</em>
                  </span>
                  <span className="pv-score">87</span>
                </div>
                <div className="pv-row">
                  <span className="pv-avatar v2" />
                  <span className="pv-col">
                    <b>Trần Hải</b>
                    <em>Full-Stack · 4y</em>
                  </span>
                  <span className="pv-score s2">92</span>
                </div>
                <div className="pv-row">
                  <span className="pv-avatar v3" />
                  <span className="pv-col">
                    <b>Lê Phương</b>
                    <em>Backend · 2y</em>
                  </span>
                  <span className="pv-score s3">71</span>
                </div>
                <div className="pv-bar">
                  <i style={{ width: "72%" }} />
                  <em>{t("recruitme.previewFooter")}</em>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="p-stack">
              {RECRUITME_STACK.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="p-meta">
              <span>{t("recruitme.metaRole")}</span>
              <span>{t("recruitme.metaDate")}</span>
            </div>
          </footer>
        </article>

        <article className="project">
          <div className="p-tag">{t("seo.tag")}</div>
          <header>
            <h3>{t("seo.title")}</h3>
            <p>{t("seo.desc")}</p>
          </header>
          <div className="p-visual pv-alt" aria-hidden>
            <div className="pv-metric">
              <b>{t("seo.metricNum")}</b>
              <em>{t("seo.metricLabel")}</em>
            </div>
            <svg className="pv-graph" viewBox="0 0 200 80" preserveAspectRatio="none">
              <path
                d="M0 70 L20 62 L40 58 L60 48 L80 42 L100 34 L120 28 L140 22 L160 18 L180 14 L200 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M0 70 L20 62 L40 58 L60 48 L80 42 L100 34 L120 28 L140 22 L160 18 L180 14 L200 10 L200 80 L0 80 Z"
                fill="currentColor"
                opacity=".12"
              />
            </svg>
          </div>
          <footer>
            <div className="p-stack">
              {SEO_STACK.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="p-meta">
              <span>{t("seo.metaMerchants")}</span>
              <span>{t("seo.metaCompany")}</span>
            </div>
          </footer>
        </article>

        <article className="project">
          <div className="p-tag">{t("speed.tag")}</div>
          <header>
            <h3>{t("speed.title")}</h3>
            <p>{t("speed.desc")}</p>
          </header>
          <div className="p-visual pv-alt" aria-hidden>
            <div className="pv-kpi">
              <div>
                <b>{t("speed.kpi1Num")}</b>
                <em>{t("speed.kpi1Label")}</em>
              </div>
              <div>
                <b>
                  {t("speed.kpi2Num")}
                  <span>{t("speed.kpi2Unit")}</span>
                </b>
                <em>{t("speed.kpi2Label")}</em>
              </div>
            </div>
            <div className="pv-bars">
              {SPEED_BARS.map((h, i) => (
                <i key={i} style={{ ["--h" as string]: h } as React.CSSProperties} />
              ))}
            </div>
          </div>
          <footer>
            <div className="p-stack">
              {SPEED_STACK.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="p-meta">
              <span>{t("speed.metaRole")}</span>
              <span>{t("speed.metaDuration")}</span>
            </div>
          </footer>
        </article>

        <article className="project">
          <div className="p-tag">{t("data.tag")}</div>
          <header>
            <h3>{t("data.title")}</h3>
            <p>{t("data.desc")}</p>
          </header>
          <div className="p-visual pv-alt" aria-hidden>
            <div className="pv-flow">
              <span className="pv-node">app₁</span>
              <span className="pv-node">app₂</span>
              <span className="pv-node">…</span>
              <span className="pv-node">app₂₁</span>
              <span className="pv-arrow">→</span>
              <span className="pv-node big">BigQuery</span>
              <span className="pv-arrow">→</span>
              <span className="pv-node">Dash</span>
            </div>
            <div className="pv-foot">
              {t.rich("data.footRich", {
                b: (c) => <span>{c}</span>,
              })}
            </div>
          </div>
          <footer>
            <div className="p-stack">
              {DATA_STACK.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="p-meta">
              <span>{t("data.metaScope")}</span>
              <span>{t("data.metaCompany")}</span>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
}
