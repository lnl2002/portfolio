import { getTranslations } from "next-intl/server";

type SkillKey = "frontend" | "backend" | "cloud" | "data" | "leadership";

const ICONS: Record<SkillKey, React.ReactNode> = {
  frontend: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="5" rx="1" />
      <rect x="3" y="14" width="18" height="5" rx="1" />
      <circle cx="7" cy="7.5" r=".8" fill="currentColor" />
      <circle cx="7" cy="16.5" r=".8" fill="currentColor" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 16a5 5 0 0 1 2-9.5A6 6 0 0 1 18 7a4 4 0 0 1 1 7.9" />
      <path d="M8 20l4-4 4 4" />
      <path d="M12 16v-6" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  leadership: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    </svg>
  ),
};

const METERS: Partial<Record<SkillKey, string>> = {
  frontend: "92%",
  backend: "88%",
  cloud: "80%",
  data: "78%",
};

export async function Skills() {
  const t = await getTranslations("Skills");

  const cards: { key: SkillKey; wide?: boolean; inline?: boolean }[] = [
    { key: "frontend" },
    { key: "backend" },
    { key: "cloud" },
    { key: "data" },
    { key: "leadership", wide: true, inline: true },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-head">
        <span className="sec-num">02</span>
        <span className="sec-label">{t("sectionLabel")}</span>
        <span className="sec-rule" />
      </div>

      <div className="skills-grid">
        {cards.map(({ key, wide, inline }) => {
          const items = t.raw(`${key}.items`) as string[];
          return (
            <article key={key} className={`skill-card${wide ? " wide" : ""}`}>
              <header>
                {ICONS[key]}
                <h3>{t(`${key}.title`)}</h3>
                <span className="skill-years">{t(`${key}.years`)}</span>
              </header>
              <ul className={inline ? "inline" : undefined}>
                {items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
              {METERS[key] && (
                <div className="meter">
                  <i style={{ ["--v" as string]: METERS[key] } as React.CSSProperties} />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
