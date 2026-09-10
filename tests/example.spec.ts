import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);
});

test('simple addition test', async () => {
  const result = 2 + 2;
  expect(result).toBe(4);
});

test('verify button click', async ({ page }) => {
  await page.goto('https://example.com');
  const heading = await page.locator('h1').textContent();
  expect(heading).toBeTruthy();
});
