import Image from "next/image";
import { getTranslations } from "next-intl/server";
import beach from "../../../public/media/career.jpg";

type Item = { year: string; title: string; text: string };

export async function Career() {
  const t = await getTranslations("Career");
  const items = t.raw("items") as Item[];
  return (
    <section className="section" id="career" aria-labelledby="career-h">
      <div className="wrap">
        <p className="label">{t("label")}</p>
        <div className="head"><h2 id="career-h">{t("heading")}</h2></div>
        <div className="career">
          <ol className="timeline">
            {items.map((it) => (
              <li key={it.title}>
                <time>{it.year}</time>
                <div><h3>{it.title}</h3><p>{it.text}</p></div>
              </li>
            ))}
          </ol>
          <div className="career__photo">
            <Image src={beach} alt={t("photoAlt")} sizes="(max-width: 1023px) 100vw, 500px" />
          </div>
        </div>
      </div>
    </section>
  );
}
