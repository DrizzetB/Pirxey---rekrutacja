import type { Page } from '@playwright/test';
import {
  createTopNavigationLocators,
  expectAllNavigationElementsVisible,
  expectHomeNavigationVisible,
  type TopNavigationLinks,
  type TopNavigationLocators,
} from './shared/topNavigation';

export class BasePage {
  readonly page: Page;
  readonly navigation: TopNavigationLocators;
  readonly topNavigationLinks: TopNavigationLinks;

  constructor(page: Page) {
    this.page = page;
    this.navigation = createTopNavigationLocators(page);
    this.topNavigationLinks = this.navigation.topNavigationLinks;
  }

  async expectHomeNavigationVisible() {
    await expectHomeNavigationVisible(this.navigation);
  }

  async expectAllNavigationElementsVisible() {
    await expectAllNavigationElementsVisible(this.navigation);
  }
}