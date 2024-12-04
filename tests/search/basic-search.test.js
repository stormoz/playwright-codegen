import { test, expect } from '@playwright/test';

// test case name/description
test('Search from home page', async ({ page }) => {
  // ARRANGE
  await page.goto('https://www.wikipedia.org/');

  // ACT
  await page.getByLabel('Search Wikipedia').click();
  await page.getByLabel('Search Wikipedia').fill('australia');
  await page.getByRole('link', { name: 'Australia Country in Oceania' }).click();

  await page.waitForLoadState('networkidle'); // added manually to make sure the page navigation or API call completed

  // ASSERT
  await expect(page.locator('#firstHeading')).toContainText('Australia');
});
