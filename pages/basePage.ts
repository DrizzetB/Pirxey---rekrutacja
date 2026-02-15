import type { Page } from '@playwright/test';
import {
  clickTopNavigationContact,
  clickTopNavigationSubpage,
  createTopNavigationLocators,
  expectAllNavigationElementsVisible,
  expectHomeNavigationVisible,
  topNavigationSubpages,
  type TopNavigationLinks,
  type TopNavigationLocators,
  type TopNavigationSubpage,
} from './shared/topNavigation';
import {
  createContactFormLocators,
  expectAllContactFormFieldsVisible,
  expectContactFormSubmitVisible,
  expectContactFormVisible,
  type ContactFormLocators,
} from './shared/contactForm';

export class BasePage {
  static readonly topNavigationSubpages = topNavigationSubpages;

  readonly page: Page;
  readonly navigation: TopNavigationLocators;
  readonly topNavigationLinks: TopNavigationLinks;
  readonly contactForm: ContactFormLocators;

  constructor(page: Page) {
    this.page = page;
    this.navigation = createTopNavigationLocators(page);
    this.topNavigationLinks = this.navigation.topNavigationLinks;
    this.contactForm = createContactFormLocators(page);
  }

  async expectHomeNavigationVisible() {
    await expectHomeNavigationVisible(this.navigation);
  }

  async expectAllNavigationElementsVisible() {
    await expectAllNavigationElementsVisible(this.navigation);
  }
  
  async clickTopNavigationContact() {
    await clickTopNavigationContact(this.page, this.navigation);
  }

  async clickTopNavigationSubpage(subpage: TopNavigationSubpage) {
    await clickTopNavigationSubpage(this.page, this.topNavigationLinks[subpage]);
  }

  async expectContactFormVisible() {
    await expectContactFormVisible(this.contactForm);
  }

  async expectAllContactFormFieldsVisible() {
    await expectAllContactFormFieldsVisible(this.contactForm);
  }

  async expectContactFormSubmitVisible() {
    await expectContactFormSubmitVisible(this.contactForm);
  }
}