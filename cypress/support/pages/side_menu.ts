import { AllureStep } from '../utils/allure-step.decorator';

export default class SideMenu {

  @AllureStep('Click on side menu item')
  clickOnMenuItem(menuItem: string) {
    cy.get(`li span`).contains(menuItem).click();
    cy.get('.text-center').contains(menuItem).should('be.visible');
  }
}