import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/site";

export const alt = "Lại Ngọc Lâm — Tech Lead for Shopify apps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HEADLINE: [string, boolean][] = [
  ..."I lead a team building Shopify apps that".split(" ").map((w): [string, boolean] => [w, false]),
  ..."thousands of merchants".split(" ").map((w): [string, boolean] => [w, true]),
  ..."run their stores on.".split(" ").map((w): [string, boolean] => [w, false]),
];

export default function OpengraphImage() {
  const host = SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const stats = [
    ["5,000+", "active merchants · AP Speed Optimizer"],
    ["#1", "for “aeo” on the Shopify App Store"],
    ["60%+", "lower infrastructure cost"],
  ];
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#0b0d10", color: "#eef1f5", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 64 64"><path d="M6 6H26V38H58V58H6Z" fill="#eef1f5" /><rect x="38" y="6" width="20" height="20" fill="#3B5BDB" /></svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 600 }}>Lại Ngọc Lâm</span>
            <span style={{ fontSize: 22, color: "#8b93a1" }}>Tech Lead · Avada Group · Hanoi</span>
          </div>
        </div>
          <span style={{ fontSize: 22, color: "#6c9bff" }}>{host}</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", columnGap: 16, fontSize: 62, fontWeight: 700, lineHeight: 1.12, letterSpacing: -1.5, maxWidth: 1040 }}>
          {HEADLINE.map(([w, em], i) => (
            <span key={i} style={em ? { color: "#6c9bff" } : {}}>{w}</span>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 64 }}>
            {stats.map(([n, l]) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 40, fontWeight: 700 }}>{n}</span>
                <span style={{ fontSize: 19, color: "#8b93a1" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
