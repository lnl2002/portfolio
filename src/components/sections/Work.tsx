import Image, { type StaticImageData } from "next/image";
import { getTranslations } from "next-intl/server";
import speed from "../../../public/media/speed-promo.jpg";
import aeo from "../../../public/media/aeo-1.jpg";
import seo from "../../../public/media/seo-1.jpg";
import recruitme from "../../../public/media/fpt-graduation.jpg";

const PICS: Record<string, { src: StaticImageData; pos?: string }> = {
  speed: { src: speed },
  aeo: { src: aeo },
  seo: { src: seo },
  recruitme: { src: recruitme, pos: "50% 62%" },
};

type Item = { key: string; name: string; badge: string; text: string; role: string; url: string; alt: string };

export async function Work() {
  const t = await getTranslations("Work");
  const items = t.raw("items") as Item[];
  return (
    <section className="section" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <p className="label">{t("label")}</p>
        <div className="head">
          <h2 id="work-h">{t("heading")}</h2>
          <p className="head__aside">{t("aside")}</p>
        </div>
        <div className="work">
          {items.map((it) => {
            const pic = PICS[it.key];
            return (
              <a className="card" href={it.url} key={it.key} target="_blank" rel="noopener">
                <div className="card__pic">
                  <Image
                    src={pic.src}
                    alt={it.alt}
                    sizes="(max-width: 719px) 100vw, 640px"
                    style={pic.pos ? { objectPosition: pic.pos } : undefined}
                  />
                </div>
                <div className="card__meta">
                  <h3>{it.name}</h3>
                  <span className="card__badge">{it.badge}</span>
                  <p>{it.text}</p>
                  <p className="card__role"><span>{t("roleLabel")}</span> {it.role}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
