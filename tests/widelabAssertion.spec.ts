import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { BlogPage } from '../pages/blogPage';

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

    test('Blog subpage has expected cat gif', async ({ page }) => {
        const blogPage = new BlogPage(page);
        await blogPage.goto();

        await blogPage.expectCatGifVisible();
        await blogPage.expectCatGifLoopsAndHasValidSource();
    });

    test('Contact form has expected fields', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();

        await homePage.clickTopNavigationContact();
        await homePage.expectContactFormVisible();
        await homePage.expectAllContactFormFieldsVisible();
        await homePage.expectContactFormSubmitVisible();
    });
});
