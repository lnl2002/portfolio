import { getTranslations } from "next-intl/server";

type Stat = { num: string; text: string };

export async function Results() {
  const t = await getTranslations("Results");
  const stats = t.raw("stats") as Stat[];
  return (
    <section className="section" id="impact" aria-labelledby="impact-h">
      <div className="wrap">
        <p className="label">{t("label")}</p>
        <div className="head"><h2 id="impact-h">{t("heading")}</h2></div>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.num}><b>{s.num}</b><span>{s.text}</span></div>
          ))}
        </div>
        <p className="note">{t("note")}</p>
      </div>
    </section>
  );
}
