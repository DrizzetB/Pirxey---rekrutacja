import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage{
    readonly mainHeading: Locator;

    constructor(page: Page) {
        super(page);
        
        this.mainHeading = page.locator('#heroHeading');
    }

    async goto() {
        await this.page.goto('/');
    }

    async expectMainHeadingVisible() {
        await expect(this.mainHeading).toBeVisible();
    }
}