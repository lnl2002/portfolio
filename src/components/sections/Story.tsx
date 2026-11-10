import { getTranslations } from "next-intl/server";

type Rule = { title: string; text: string };

export async function Story() {
  const t = await getTranslations("Story");
  const rules = t.raw("rules") as Rule[];
  return (
    <section className="section" id="story" aria-labelledby="story-h">
      <div className="wrap">
        <p className="label">{t("label")}</p>
        <div className="head"><h2 id="story-h">{t("heading")}</h2></div>
        <div className="story">
          <p className="story__lede">
            {t("ledeStart")}<strong>{t("ledeStrong")}</strong>{t("ledeEnd")}
          </p>
          <ol className="rules">
            {rules.map((r, i) => (
              <li key={r.title}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
