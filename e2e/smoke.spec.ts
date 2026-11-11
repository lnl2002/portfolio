import { expect, test } from "@playwright/test";

test.describe("english @ /", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("metadata + nav renders", async ({ page }) => {
    await expect(page).toHaveTitle(/Lại Ngọc Lâm/);
    const nav = page.locator("header.nav");
    for (const name of ["How we work", "Products", "Results", "Career"]) {
      await expect(nav.getByRole("link", { name, exact: true })).toBeVisible();
    }
    await expect(nav.getByRole("link", { name: "Email Lâm" })).toHaveAttribute("href", "mailto:laingoclam3112@gmail.com");
  });

  test("hero leads with results and App Store proof", async ({ page }) => {
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toContainText("thousands of merchants");
    const proof = page.locator(".proof li");
    await expect(proof).toHaveCount(3);
    await expect(proof.first()).toContainText("5.0 from 762 reviews");
    await expect(page.locator(".hero__tag")).toContainText("Q3 2025");
  });

  test("sections exist in order", async ({ page }) => {
    const ids = await page.locator("main section[id]").evaluateAll((els) => els.map((e) => e.id));
    expect(ids).toEqual(["story", "work", "impact", "career", "contact"]);
  });

  test("products: three apps plus RecruitMe, with real links", async ({ page }) => {
    const cards = page.locator(".work .card");
    await expect(cards).toHaveCount(4);
    await expect(cards.first()).toHaveAttribute("href", "https://apps.shopify.com/ap-speed-optimizer");
    await expect(cards.nth(3)).toHaveAttribute("href", /daihoc\.fpt\.edu\.vn/);
  });

  test("results and career figures match the CV", async ({ page }) => {
    await expect(page.locator(".stats")).toContainText("5,000+");
    await expect(page.locator(".stats")).toContainText("60%+");
    await expect(page.locator(".timeline")).toContainText("Outstanding Employee of the Quarter for Q3 2025");
    await expect(page.locator("main")).not.toContainText("Q3 2026");
  });

  test("images are optimised and lazy below the fold", async ({ page }) => {
    const hero = page.locator(".hero__photo");
    await expect(hero).toHaveAttribute("src", /_next\/image/);
    await expect(page.locator(".card__pic img").first()).toHaveAttribute("loading", "lazy");
    await expect(page.locator(".career__photo img")).toHaveAttribute("loading", "lazy");
  });

  test("CV download links", async ({ page }) => {
    await expect(page.locator(".hero a[href='/Lai_Ngoc_Lam_CV.pdf']")).toHaveAttribute("download", "");
    await expect(page.locator("#contact a[href='/Lai_Ngoc_Lam_CV.pdf']")).toBeVisible();
  });

  test("contact shows the email", async ({ page }) => {
    await expect(page.locator("section#contact")).toContainText("laingoclam3112@gmail.com");
  });
});

test.describe("vietnamese @ /vi", () => {
  test("renders Vietnamese copy", async ({ page }) => {
    await page.goto("/vi");
    await expect(page.locator("h1")).toContainText("hàng nghìn merchant");
    const nav = page.locator("header.nav");
    await expect(nav.getByRole("link", { name: "Sản phẩm" })).toBeVisible();
    await expect(page.locator(".timeline")).toContainText("quý 3/2025");
  });
});

test("favicon is the custom SVG icon", async ({ page, request }) => {
  await page.goto("/");
  const href = await page.locator('link[rel="icon"][type="image/svg+xml"]').first().getAttribute("href");
  expect(href).toBeTruthy();
  const res = await request.get(href as string);
  expect(res.status()).toBe(200);
  expect(await res.text()).toContain("#3B5BDB");
});

test("locale switcher navigates without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`[console.error] ${m.text()}`);
  });
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Language" })
    .getByRole("link", { name: "VI", exact: true })
    .click();
  await expect(page).toHaveURL(/\/vi$/);
  await expect(page.locator("h1")).toContainText("Shopify app");
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
    const res = await request.get(new URL(ogUrl as string).pathname);
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("image/png");
  });
});
