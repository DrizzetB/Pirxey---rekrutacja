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

  async expectCatGifLoopsAndHasValidSource() {
    await expect(this.catGif).toHaveAttribute('loop', 'true');
    const mediaSource = await this.catGif.evaluate((element) => {
      const video = element as HTMLVideoElement;
      return (
        video.currentSrc ||
        video.getAttribute('src') ||
        video.querySelector('source')?.getAttribute('src') ||
        ''
      );
    });

    expect(mediaSource).not.toEqual('');
    expect(mediaSource).toMatch(/\.(mp4|webm|mov)(\?.*)?$/i);
  }
};
