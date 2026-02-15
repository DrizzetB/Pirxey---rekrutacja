import { expect, type Locator, type Page } from '@playwright/test';

export type ContactFormCheckboxInputs = {
  productDesign: Locator;
  website: Locator;
  development: Locator;
  branding: Locator;
  marketing: Locator;
};

export type ContactFormCheckboxLabels = {
  productDesign: Locator;
  website: Locator;
  development: Locator;
  branding: Locator;
  marketing: Locator;
};

export type ContactFormFields = {
  email: Locator;
  name: Locator;
  message: Locator;
  checkboxInputs: ContactFormCheckboxInputs;
  checkboxLabels: ContactFormCheckboxLabels;
};

export type ContactFormLocators = {
  form: Locator;
  contactFormFields: ContactFormFields;
  submitButton: Locator;
};

export function createContactFormLocators(page: Page): ContactFormLocators {
  const form = page.locator('#contact-form');
  const checkboxInputs: ContactFormCheckboxInputs = {
    productDesign: form.locator('#contact-product-design'),
    website: form.locator('#contact-website'),
    development: form.locator('#contact-development'),
    branding: form.locator('#contact-branding'),
    marketing: form.locator('#contact-marketing'),
  };
  const checkboxLabels: ContactFormCheckboxLabels = {
    productDesign: form.locator('[for="Product-Design"]'),
    website: form.locator('[for="Website"]'),
    development: form.locator('[for="Development"]'),
    branding: form.locator('[for="branding"]'),
    marketing: form.locator('[for="Marketing"]'),
  };
  const contactFormFields: ContactFormFields = {
    email: form.locator('#contact-email'),
    name: form.locator('#contact-name'),
    message: form.locator('#contact-message'),
    checkboxInputs,
    checkboxLabels,
  };
  const submitButton = form.locator('button[type="submit"]');

  return {
    form,
    contactFormFields,
    submitButton,
  };
}

export async function expectContactFormVisible(locators: ContactFormLocators) {
  await expect(locators.form).toBeVisible();
}

export async function expectAllContactFormFieldsVisible(locators: ContactFormLocators) {
  await expectContactFormVisible(locators);
  await expect(locators.contactFormFields.email, 'email should be visible').toBeVisible();
  await expect(locators.contactFormFields.name, 'name should be visible').toBeVisible();
  await expect(locators.contactFormFields.message, 'message should be visible').toBeVisible();

  for (const [name, locator] of Object.entries(locators.contactFormFields.checkboxLabels)) {
    await expect(locator, `${name} checkbox label should be visible`).toBeVisible();
  }
}

export async function expectContactFormSubmitVisible(locators: ContactFormLocators) {
  await expect(locators.submitButton).toBeVisible();
}
