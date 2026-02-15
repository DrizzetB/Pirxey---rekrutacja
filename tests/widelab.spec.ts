import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Assertion tests for widelab.co', () => {
    test('Widelab home has expected title', async({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        
        await homePage.expectMainHeadingVisible();
        await expect(homePage.mainHeading).toHaveText(/Design a product users\s+really\s+desire/i);

    });

    test('Widelab home has expected navigation menu elements', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();

        await homePage.expectHomeNavigationVisible();
        await homePage.expectAllNavigationElementsVisible();
  });
});