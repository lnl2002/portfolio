import { ImageResponse } from "next/og";

export const alt = "Lại Ngọc Lâm — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse at 20% 10%, #1a2a4a 0%, #0a0f1a 55%, #05070d 100%)",
          color: "#e8edf6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#7aa2ff" }}>
          <span style={{ display: "block", width: 14, height: 14, borderRadius: 999, background: "#7aa2ff", boxShadow: "0 0 24px #7aa2ff" }} />
          <span>LAT 21.0370° N</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>HANOI · VIETNAM</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 78,
              fontWeight: 600,
              letterSpacing: -1.5,
              lineHeight: 1.08,
              color: "#f6f8fc",
              maxWidth: 1040,
            }}
          >
            <span>Building software at the&nbsp;</span>
            <span style={{ color: "#7aa2ff" }}>speed of light,&nbsp;</span>
            <span>grounded on Earth.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#b4bed2",
              maxWidth: 980,
              lineHeight: 1.35,
            }}
          >
            Lại Ngọc Lâm — Full-Stack Developer. 3 years shipping products serving 50,000+ merchants, plus 6 months leading a 5-person crew.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 22, color: "#8a94a8", letterSpacing: 2, textTransform: "uppercase" }}>
          <div style={{ display: "flex", gap: 32 }}>
            <span>50k+ merchants</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>33% infra cut</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>5k+ active / 6 mo</span>
          </div>
          <div style={{ color: "#7aa2ff" }}>lainngoclam.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
