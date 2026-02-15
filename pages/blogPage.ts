import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class BlogPage extends BasePage {
  readonly catGif: Locator;

  constructor(page: Page) {
    super(page);

    this.catGif = page.locator('.hero-interaction_main-project #heroVideoSpan');
  }

  async goto() {
    await this.page.goto('/blog');
  }

  async expectCatGifVisible() {
    await expect(this.catGif).toBeVisible();
  }
};
