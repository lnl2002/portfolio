import { expect, test } from "@playwright/test";

test.describe("english @ /", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("metadata + core nav renders", async ({ page }) => {
    await expect(page).toHaveTitle(/Lại Ngọc Lâm/);
    await expect(page.getByRole("link", { name: /Lại Ngọc Lâm/ }).first()).toBeVisible();
    const nav = page.locator("header.nav");
    await expect(nav.getByRole("link", { name: "About", exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Stack", exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Missions", exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Projects", exact: true })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Contact", exact: true })).toBeVisible();
  });

  test("hero renders with title, coords, stats, ticker, satellites", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/speed of light/i);
    await expect(page.locator(".hero-coords")).toContainText("HANOI · VIETNAM");
    await expect(page.locator(".hero-stats")).toContainText("50k+");
    await expect(page.locator(".hero-stats")).toContainText("merchants served");
    await expect(page.locator(".hero-stats")).toContainText(/active merchants/i);
    await expect(page.locator(".satellite.s1")).toContainText("React");
    await expect(page.locator(".hero-ticker")).toContainText(/mission_log/);
  });

  test("all five sections exist with section numbers", async ({ page }) => {
    for (const id of ["about", "skills", "missions", "projects", "contact"]) {
      await expect(page.locator(`section#${id}`)).toBeVisible();
    }
    await expect(page.locator("section#about .sec-num")).toHaveText("01");
    await expect(page.locator("section#contact .sec-num")).toHaveText("05");
  });

  test("skills grid has five cards", async ({ page }) => {
    await expect(page.locator(".skills-grid .skill-card")).toHaveCount(5);
    await expect(page.locator(".skill-card.wide h3")).toHaveText(/Leadership/i);
  });

  test("missions timeline has three entries with live first", async ({ page }) => {
    const items = page.locator(".missions .mission");
    await expect(items).toHaveCount(3);
    await expect(items.first()).toHaveClass(/live/);
    await expect(items.first().locator(".m-code")).toHaveText("M-03");
  });

  test("projects grid has four cards with featured first", async ({ page }) => {
    const projects = page.locator(".projects .project");
    await expect(projects).toHaveCount(4);
    await expect(projects.first()).toHaveClass(/featured/);
    await expect(projects.first().locator("h3")).toHaveText("RecruitMe");
  });

  test("RecruitMe has FPT-news ribbon, no fake candidate names, cited article card", async ({
    page,
  }) => {
    const featured = page.locator(".projects .project.featured");
    await expect(featured.locator(".p-ribbon")).toContainText(/FPT University News/i);
    const body = await featured.textContent();
    expect(body, "fake names must be gone").not.toMatch(/Nguyễn Minh Anh|Trần Hải|Lê Phương/);
    await expect(featured).toContainText(/OCR extract/i);
    await expect(featured).toContainText(/AI scoring/i);

    const press = featured.locator("a.press-card");
    await expect(press).toBeVisible();
    await expect(press).toHaveAttribute(
      "href",
      "https://daihoc.fpt.edu.vn/hoc-thuat-2/recruitme-giai-phap-tu-dong-hoa-tuyen-dung-cua-sinh-vien-truong-dai-hoc-fpt/"
    );
    await expect(press).toHaveAttribute("target", "_blank");
    await expect(press).toHaveAttribute("rel", /noopener/);
    await expect(press.locator(".press-title")).toContainText(/RecruitMe/);
    await expect(press.locator(".press-badge")).toContainText(/daihoc\.fpt\.edu\.vn/i);
    await expect(press.locator(".press-cta")).toContainText(/Read the article/i);
  });

  test("about card shows avatar + download CV link", async ({ page }) => {
    const card = page.locator(".about-card");
    await expect(card.locator(".about-avatar img")).toBeVisible();
    const cv = card.locator("a.link-cv");
    await expect(cv).toBeVisible();
    await expect(cv).toHaveAttribute("href", "/Lai_Ngoc_Lam_CV.pdf");
    await expect(cv).toHaveAttribute("download", "");
  });

  test("hero CTA exposes a CV download button", async ({ page }) => {
    const cta = page.locator(".hero-cta a[href='/Lai_Ngoc_Lam_CV.pdf']");
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("download", "");
  });

  test("speed KPI reads 5,000+", async ({ page }) => {
    const speed = page.locator(".projects .project").nth(2);
    await expect(speed.locator(".eq-chip.eq-result b")).toContainText("5,000+");
  });

  test("contact shows email, phone, address, motto", async ({ page }) => {
    const contact = page.locator("section#contact");
    await expect(contact).toContainText("laingoclam3112@gmail.com");
    await expect(contact).toContainText(/Nghĩa Đô/);
    await expect(contact.locator(".foot-motto")).toContainText("per aspera ad astra");
  });

  test("about card shows full-precision GPA", async ({ page }) => {
    const card = page.locator(".about-card");
    await expect(card).toContainText("8.024/10");
  });

  test("hero sub mentions 6-month leadership", async ({ page }) => {
    await expect(page.locator(".hero-sub")).toContainText(/6 months/i);
  });

  test("mission M-01 mentions both FPT news and Facebook", async ({ page }) => {
    const m1 = page.locator(".missions .mission").filter({ hasText: "M-01" });
    await expect(m1).toHaveCount(1);
    await expect(m1).toContainText(/official news/i);
    await expect(m1).toContainText(/Facebook/i);
  });
});

test.describe("vietnamese @ /vi", () => {
  test("renders Vietnamese copy", async ({ page }) => {
    await page.goto("/vi");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/vận tốc ánh sáng/);
    await expect(page.locator(".hero-coords")).toContainText("HÀ NỘI · VIỆT NAM");
    const nav = page.locator("header.nav");
    await expect(nav.getByRole("link", { name: "Giới thiệu" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Dự án" })).toBeVisible();
  });
});

async function waitForHydration(page: import("@playwright/test").Page) {
  await page.waitForFunction(() => !!document.getElementById("themeToggle"));
}

test("theme toggle flips data-theme", async ({ page }) => {
  await page.goto("/");
  const html = page.locator("html");
  await expect(html).toHaveAttribute("data-theme", "dark");
  await waitForHydration(page);
  await page.getByRole("button", { name: "Toggle theme" }).click();
  await expect(html).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "Toggle theme" }).click();
  await expect(html).toHaveAttribute("data-theme", "dark");
});

test("locale switcher navigates without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[console.error] ${m.text()}`);
  });
  await page.goto("/");
  await waitForHydration(page);
  await page
    .getByRole("navigation", { name: "Language" })
    .getByRole("link", { name: "VI", exact: true })
    .click();
  await expect(page).toHaveURL(/\/vi$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/vận tốc ánh sáng/);
  expect(errors, `unexpected errors: ${errors.join(" | ")}`).toEqual([]);
});

test("Lai_Ngoc_Lam_CV.pdf served from public", async ({ request }) => {
  const res = await request.get("/Lai_Ngoc_Lam_CV.pdf");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("pdf");
});

test.describe("SEO", () => {
  test("robots.txt allows all and references sitemap", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toMatch(/User-Agent:\s*\*/i);
    expect(body).toMatch(/Allow:\s*\//i);
    expect(body).toMatch(/Sitemap:\s*https?:\/\/.+\/sitemap\.xml/i);
  });

  test("sitemap.xml lists both locales with hreflang alternates", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain("<urlset");
    expect(body).toMatch(/<loc>https?:\/\/[^<]+<\/loc>/);
    expect(body).toMatch(/hreflang="en"/);
    expect(body).toMatch(/hreflang="vi"/);
    expect(body).toMatch(/hreflang="x-default"/);
  });

  test("home page has canonical + hreflang + OG + twitter + JSON-LD", async ({ page }) => {
    await page.goto("/");

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveCount(1);
    await expect(canonical).toHaveAttribute("href", /^https?:\/\//);

    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
    await expect(page.locator('link[rel="alternate"][hreflang="vi"]')).toHaveCount(1);
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);

    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "profile");
    await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute(
      "content",
      /opengraph-image/
    );
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute("content", "en_US");

    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image"
    );

    const ldJson = page.locator('script[type="application/ld+json"]');
    expect(await ldJson.count()).toBeGreaterThan(0);
    const texts = await ldJson.allTextContents();
    const merged = texts.join(" ");
    expect(merged).toContain('"@type":"Person"');
    expect(merged).toContain("Lại Ngọc Lâm");
    expect(merged).toContain("jobTitle");
  });

  test("Vietnamese page has vi_VN og:locale and vi canonical", async ({ page }) => {
    await page.goto("/vi");
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute("content", "vi_VN");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/vi$/);
  });

  test("opengraph-image endpoint returns a PNG", async ({ page, request }) => {
    await page.goto("/");
    const ogUrl = await page.locator('meta[property="og:image"]').first().getAttribute("content");
    expect(ogUrl, "og:image meta missing").toBeTruthy();
    const res = await request.get(ogUrl as string);
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("image/png");
  });
});
