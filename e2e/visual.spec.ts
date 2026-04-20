import { test } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "screenshots");
mkdirSync(OUT, { recursive: true });

async function prepare(
  page: import("@playwright/test").Page,
  opts: { theme: "dark" | "light"; locale: "" | "vi" }
) {
  await page.addInitScript((t) => {
    try {
      localStorage.setItem("theme", t);
    } catch {}
  }, opts.theme);
  await page.goto(opts.locale ? `/${opts.locale}` : "/");
  await page.waitForFunction(() => !!document.getElementById("themeToggle"));
  await page.addStyleTag({
    content: `*, *::before, *::after { animation-duration: 0s !important; animation-delay: 0s !important; transition-duration: 0s !important; }`,
  });
  // Force-reveal sections that would otherwise wait for IntersectionObserver.
  // Loop for a few frames so we win the race with RevealOnScroll's useEffect,
  // which may run after our first evaluate() and overwrite opacity back to 0.
  await page.evaluate(async () => {
    const sel =
      ".hero-copy, .orbit, .about-lede, .about-card, .skill-card, .mission, .project, .contact-panel";
    const reveal = () => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.transition = "none";
      });
    };
    for (let i = 0; i < 20; i++) {
      reveal();
      await new Promise((r) => requestAnimationFrame(() => r(undefined)));
    }
  });
  await page.waitForTimeout(300);
}

test.describe("visual review", () => {
  for (const locale of ["", "vi"] as const) {
    for (const theme of ["dark", "light"] as const) {
      test(`desktop ${locale || "en"} ${theme}`, async ({ page }) => {
        await page.setViewportSize({ width: 1440, height: 900 });
        await prepare(page, { theme, locale });
        await page.screenshot({
          path: join(OUT, `desktop-${locale || "en"}-${theme}.png`),
          fullPage: true,
        });
      });
    }
  }

  test("mobile en dark", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await prepare(page, { theme: "dark", locale: "" });
    await page.screenshot({
      path: join(OUT, "mobile-en-dark.png"),
      fullPage: true,
    });
  });

  test("tablet en dark", async ({ page }) => {
    await page.setViewportSize({ width: 820, height: 1180 });
    await prepare(page, { theme: "dark", locale: "" });
    await page.screenshot({
      path: join(OUT, "tablet-en-dark.png"),
      fullPage: true,
    });
  });

  for (const theme of ["dark", "light"] as const) {
    test(`desktop en ${theme} above-fold`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await prepare(page, { theme, locale: "" });
      await page.screenshot({
        path: join(OUT, `abovefold-en-${theme}.png`),
        fullPage: false,
      });
    });
  }

  test("desktop en dark each section", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await prepare(page, { theme: "dark", locale: "" });
    // Make sticky nav non-sticky so section crops don't include it.
    await page.addStyleTag({ content: `header.nav { position: static !important; }` });
    for (const id of ["about", "skills", "missions", "projects", "contact"] as const) {
      const el = page.locator(`section#${id}`);
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(120);
      await el.screenshot({ path: join(OUT, `section-${id}-dark.png`) });
    }
  });
});
