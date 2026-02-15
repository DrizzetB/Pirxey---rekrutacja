import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly mainHeading: Locator;

    constructor(page: Page) {
        this.page = page;

        this.mainHeading = page.locator('#heroHeading');
    }

    async goto() {
        await this.page.goto('https://www.widelab.co');
    }

    async expectMainHeadingVisible() {
        await expect(this.mainHeading).toBeVisible();
    }
}