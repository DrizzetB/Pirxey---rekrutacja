import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Visual Regression tests', () => {
  for (const subpage of HomePage.topNavigationSubpages) {
    test(`should match screenshot for ${subpage} page`, async ({ page }) => {
      const homePage = new HomePage(page);

      await homePage.goto();
      await homePage.expectHomeNavigationVisible();
      await homePage.expectAllNavigationElementsVisible();
      await homePage.clickTopNavigationSubpage(subpage);
      await page.waitForLoadState('load');

      // TODO clean up, move as method to utils, add TIMEOUT_SNAPSHOT variable
      await expect(page).toHaveScreenshot(`${subpage}.png`, {
        fullPage: true,
        animations: 'disabled',
        timeout: 10000,
        mask: [
          page.locator('video'),
          page.locator('.home-logo_item, .home-logo, [class*="home-logo"]'),
          page.locator('.lottie-animation'),
        ],
      });
    });
  }
});