import { AllureStep } from '../utils/allure-step.decorator';

export default class HomePage {
  header_img_selector = 'header img[src="/images/Toolsqa.jpg"]'
  home_card_selector = 'div.card h5'

  @AllureStep('Visit Home Page')
  visitHomePage() {
    cy.visit('/');
    this.validateHomePageLoaded()
  }

  @AllureStep()
  validateHomePageCard(title: string): void {
    cy.get(this.home_card_selector, { timeout: 10000 }).should('be.visible').contains(title);
  }

  @AllureStep()
  clickOnHomeCard(title: string, url_resource: string): void {
    cy.get(this.home_card_selector, { timeout: 10000 }).should('be.visible').contains(title).click();
    cy.validateUrlContains(url_resource);
  }

  @AllureStep('Validate Home Page Header Image')
  validateHomePageHeaderImg() {
    cy.get(this.header_img_selector, { timeout: 10000 }).should('be.visible');
  }

  @AllureStep()
  clickOnHomePageHeaderImg(): void {
    cy.get(this.header_img_selector, { timeout: 10000 }).click();
  }

  @AllureStep('Validate Home Page Loaded')
  validateHomePageLoaded() {
    this.validateHomePageHeaderImg()
    this.validateHomePageCard('Elements');
    this.validateHomePageCard('Forms');
    this.validateHomePageCard('Alerts, Frame & Windows');
    this.validateHomePageCard('Widgets');
    this.validateHomePageCard('Interactions');
    this.validateHomePageCard('Book Store Application');
  }
}