import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/site";

export const alt = "Lại Ngọc Lâm — Tech Lead for Shopify apps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "#6c9bff", color: "#0b0d10", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700 }}>LN</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 600 }}>Lại Ngọc Lâm</span>
            <span style={{ fontSize: 22, color: "#8b93a1" }}>Tech Lead · Avada Group · Hanoi</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 62, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5, maxWidth: 1040 }}>
          <span>I lead a team building Shopify apps that&nbsp;</span>
          <span style={{ color: "#6c9bff" }}>thousands of merchants</span>
          <span>&nbsp;run their stores on.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 48 }}>
            {stats.map(([n, l]) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 40, fontWeight: 700 }}>{n}</span>
                <span style={{ fontSize: 19, color: "#8b93a1" }}>{l}</span>
              </div>
            ))}
          </div>
          <span style={{ fontSize: 22, color: "#6c9bff" }}>{host}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
