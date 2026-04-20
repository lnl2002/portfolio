import { expect, test } from "@playwright/test";

test("english homepage renders at /", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Portfolio/);
  await expect(
    page.getByRole("heading", { name: /To get started, edit the page\.tsx file\./ })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Deploy Now/ })
  ).toBeVisible();
});

test("vietnamese homepage renders at /vi", async ({ page }) => {
  await page.goto("/vi");
  await expect(
    page.getByRole("heading", { name: /Để bắt đầu, chỉnh sửa file page\.tsx\./ })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Triển khai ngay/ })
  ).toBeVisible();
});

test("locale switcher navigates between locales", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Language" })
    .getByRole("link", { name: "Tiếng Việt" })
    .click();
  await expect(page).toHaveURL(/\/vi$/);
  await expect(
    page.getByRole("heading", { name: /Để bắt đầu/ })
  ).toBeVisible();
});

test("cv.pdf is served from public/", async ({ request }) => {
  const res = await request.get("/cv.pdf");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("pdf");
});
