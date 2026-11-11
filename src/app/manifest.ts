import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lại Ngọc Lâm — Tech Lead",
    short_name: "Lại Ngọc Lâm",
    start_url: "/",
    display: "standalone",
    theme_color: "#111111",
    background_color: "#F4F2EE",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
