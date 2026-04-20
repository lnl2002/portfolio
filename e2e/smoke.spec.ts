import { expect, test } from "@playwright/test";

test("homepage renders with title and default heading", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Create Next App/);
  await expect(
    page.getByRole("heading", { name: /To get started, edit the page\.tsx file\./ })
  ).toBeVisible();
  await expect(page.getByRole("img", { name: /Next\.js logo/i })).toBeVisible();
});

test("cv.pdf is served from public/", async ({ request }) => {
  const res = await request.get("/cv.pdf");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("pdf");
});
