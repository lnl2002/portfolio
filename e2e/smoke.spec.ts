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
    const m1 = page.locator(".missions .mission").last();
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

test("cv.pdf served from public", async ({ request }) => {
  const res = await request.get("/cv.pdf");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("pdf");
});
