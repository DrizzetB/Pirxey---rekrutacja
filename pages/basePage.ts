import type { Page } from '@playwright/test';
import {
  createTopNavigationLocators,
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
}