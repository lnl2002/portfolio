import Image from "next/image";
import { getTranslations } from "next-intl/server";

const RECRUITME_STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "NextUI",
  "Express",
  "MongoDB",
  "AWS S3",
  "AWS Textract",
  "Gemini",
  "Twilio",
  "Vercel",
  "EC2",
  "Jira",
];
const SEO_STACK = ["React", "Koa", "Cloud Run", "Pub/Sub", "Cloud Storage"];
const SPEED_STACK = ["React", "Koa", "Firebase", "Cloud Functions"];
const DATA_STACK = ["BigQuery", "Pub/Sub", "Cloud Functions", "Node"];

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
          <div className="p-ribbon">
            <i className="p-ribbon-dot" />
            <span>{t("recruitme.featuredBadge")}</span>
          </div>
          <header>
            <h3>{t("recruitme.title")}</h3>
            <p>{t("recruitme.desc")}</p>
          </header>
          <div className="p-visual">
            <div className="pv-window" aria-hidden>
              <div className="pv-chrome">
                <i />
                <i />
                <i />
                <span>{t("recruitme.previewUrl")}</span>
              </div>
              <div className="pv-body">
                <div className="pv-row">
                  <span className="pv-step">01</span>
                  <span className="pv-col">
                    <b>{t("recruitme.pipelineStep1Title")}</b>
                    <em>{t("recruitme.pipelineStep1Meta")}</em>
                  </span>
                </div>
                <div className="pv-row">
                  <span className="pv-step">02</span>
                  <span className="pv-col">
                    <b>{t("recruitme.pipelineStep2Title")}</b>
                    <em>{t("recruitme.pipelineStep2Meta")}</em>
                  </span>
                </div>
                <div className="pv-row">
                  <span className="pv-step">03</span>
                  <span className="pv-col">
                    <b>{t("recruitme.pipelineStep3Title")}</b>
                    <em>{t("recruitme.pipelineStep3Meta")}</em>
                  </span>
                </div>
                <div className="pv-bar">
                  <i style={{ width: "72%" }} />
                  <em>{t("recruitme.previewFooter")}</em>
                </div>
              </div>
            </div>
            <a
              className="press-card"
              href={t("recruitme.pressUrl")}
              target="_blank"
              rel="noopener"
              aria-label={`${t("recruitme.pressCta")} — ${t("recruitme.pressTitle")}`}
            >
              <span className="press-badge">
                <i className="press-dot" />
                {t("recruitme.pressCategory")} · {t("recruitme.pressSource")}
              </span>
              <span className="press-thumb">
                <Image
                  src="/fpt-graduation.jpg"
                  alt=""
                  width={220}
                  height={160}
                  sizes="(max-width: 900px) 220px, 180px"
                />
              </span>
              <span className="press-title">{t("recruitme.pressTitle")}</span>
              <span className="press-meta">
                <time>{t("recruitme.pressDate")}</time>
                <span className="press-cta">
                  {t("recruitme.pressCta")}
                  <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden>
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </a>
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
            <div className="pv-pipeline">
              <span className="pp-node">
                <b>{t("seo.pipe1")}</b>
              </span>
              <span className="pp-arrow">→</span>
              <span className="pp-node pp-accent">
                <b>{t("seo.pipe2")}</b>
                <em>{t("seo.pipe2Sub")}</em>
              </span>
              <span className="pp-arrow">→</span>
              <span className="pp-node">
                <b>{t("seo.pipe3")}</b>
              </span>
              <span className="pp-arrow">→</span>
              <span className="pp-node">
                <b>{t("seo.pipe4")}</b>
              </span>
            </div>
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
            <div className="pv-equation">
              <div className="eq-chip">
                <b>
                  {t("speed.kpi2Num")}
                  <span>{t("speed.kpi2Unit")}</span>
                </b>
                <em>{t("speed.kpi2Label")}</em>
              </div>
              <span className="eq-op">×</span>
              <div className="eq-chip">
                <b>
                  {t("speed.eqMultiplierNum")}
                  <span>{t("speed.eqMultiplierUnit")}</span>
                </b>
                <em>{t("speed.eqMultiplierLabel")}</em>
              </div>
              <span className="eq-op">=</span>
              <div className="eq-chip eq-result">
                <b>{t("speed.kpi1Num")}</b>
                <em>{t("speed.kpi1Label")}</em>
              </div>
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
            <div className="pv-outputs">
              <em>{t("data.outLabel")}</em>
              <span className="pv-out">{t("data.out1")}</span>
              <span className="pv-out">{t("data.out2")}</span>
              <span className="pv-out">{t("data.out3")}</span>
              <span className="pv-out">{t("data.out4")}</span>
              <span className="pv-out">{t("data.out5")}</span>
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
