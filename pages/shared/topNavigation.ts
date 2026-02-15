import { expect, type Locator, type Page } from '@playwright/test';

export type TopNavigationLocators = {
  home: Locator;
  navbarMenu: Locator;
  topNavigationLinks: TopNavigationLinks;
  contact: Locator;
};

export type TopNavigationLinks = {
  caseStudies: Locator;
  services: Locator;
  clients: Locator;
  blog: Locator;
};


export function createTopNavigationLocators(page: Page): TopNavigationLocators {
  const home = page.locator('#heroNavbarBranding');
  const navbarMenu = page.locator('#heroNavbar');
  const contact = page.locator('//div[@class="button_small is-navbar"]/div[@class="link is-p-l"]/div[contains(text(),"Get in touch")]'); // XPath

  const topNavigationLinks: TopNavigationLinks = {
    caseStudies: navbarMenu.locator('a:has-text("Case studies")'),
    services: navbarMenu.locator('a:has-text("Services")'),
    clients: navbarMenu.locator('a:has-text("Clients")'),
    blog: navbarMenu.locator('a:has-text("Blog")'),
  };

  return {
    home,
    navbarMenu,
    topNavigationLinks,
    contact,
  };
}