import { AllureStep } from '../utils/allure-step.decorator';

export default class HomePage {

  @AllureStep('Visit Home Page')
  visitHomePage() {
    cy.visit('/');
  }

  @AllureStep()
  validateHomePageCard(title: string): void {
    cy.get('div.card h5').should('be.visible').contains(title);
  }

  @AllureStep('Validate Home Page Header Image')
  validateHomePageHeaderImg() {
    cy.get('header img[src="/images/Toolsqa.jpg"]').should('be.visible');
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