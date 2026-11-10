import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Arrow } from "@/components/Arrow";
import { CV_PATH, SITE_EMAIL } from "@/lib/site";
import portrait from "../../../public/media/portrait-suit-cutout.png";
import speedIcon from "../../../public/media/speed-icon.png";
import aeoIcon from "../../../public/media/aeo-icon.png";
import seoIcon from "../../../public/media/seo-icon.png";

const ICONS = { speed: speedIcon, aeo: aeoIcon, seo: seoIcon } as const;
type Proof = { name: string; rating: string; icon: keyof typeof ICONS };

export async function Hero() {
  const t = await getTranslations("Hero");
  const proof = t.raw("proof") as Proof[];

  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__sign"><b>Lại Ngọc Lâm</b> · {t("sign")}</p>
          <h1 id="hero-h">
            {t("titleStart")}<em>{t("titleEm")}</em>{t("titleEnd")}
          </h1>
          <p className="hero__lead">{t("lead")}</p>
          <div className="row">
            <a className="btn btn--blue" href={`mailto:${SITE_EMAIL}`}>{t("ctaEmail")}<Arrow /></a>
            <a className="btn btn--line" href={CV_PATH} download>{t("ctaCv")}</a>
          </div>
          <ul className="proof" aria-label={t("proofLabel")}>
            {proof.map((p) => (
              <li key={p.name}>
                <Image src={ICONS[p.icon]} alt="" width={40} height={40} />
                <b>{p.name}</b>
                <span>{p.rating}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__media">
          <div className="hero__panel" aria-hidden="true" />
          <Image
            className="hero__photo"
            src={portrait}
            alt={t("photoAlt")}
            sizes="(max-width: 719px) 90vw, 512px"
            preload
          />
          <p className="hero__tag"><b>{t("tagTitle")}</b>{t("tagText")}</p>
        </div>
      </div>
    </section>
  );
}
