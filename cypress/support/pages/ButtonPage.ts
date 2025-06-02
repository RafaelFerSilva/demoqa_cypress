import { AllureStep } from '../utils/allure-step.decorator';

export default class ButtonPage {
  @AllureStep('Perform double click on double button')
  performeDoubleClickOnDoubleButton(): void {
    cy.get('#doubleClickBtn').dblclick();
    cy.get('#doubleClickMessage').should('contain.text', 'You have done a double click');
  }

  @AllureStep('Perform right click on right button')
  performRightClickOnRightButton(): void {
    cy.get('#rightClickBtn').rightclick();
    cy.get('#rightClickMessage').should('contain.text', 'You have done a right click');
  }

  performClickOnDynamicButton(): void {
    cy.getByExactText('button', 'Click Me').should('have.text', 'Click Me').click();
    cy.get('#dynamicClickMessage', { timeout: 10000 }).should('contain.text', 'You have done a dynamic click');
  }
}