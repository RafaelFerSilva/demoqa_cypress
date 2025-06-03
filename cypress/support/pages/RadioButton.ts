import { AllureStep } from "../utils/allure-step.decorator"

export default class RadioButton {
  RADIO_IDS = { Yes: 'yesRadio', Impressive: 'impressiveRadio', No: 'noRadio' }
  INPUT_RADIO = 'input\#$$'
  LABEL_RADIO = '[for=$$]'
  RADIO_BUTTON_RESULT = 'You have selected'

  @AllureStep('Validate the radio button label')
  validateRadioButtonLabel(label: string): void {
    cy.get(this.LABEL_RADIO.replace('$$', this.RADIO_IDS[label])).should('be.visible');
  }

  @AllureStep('Validate the radio button input')
  validateRadioButtonInput(label: string): void {
    cy.get(this.INPUT_RADIO.replace('$$', label)).should('be.visible');
  }

  @AllureStep('Click the radio button')
  clickRadioButton(label: string): void {
    cy.get(this.LABEL_RADIO.replace('$$', this.RADIO_IDS[label])).click();
  }

  @AllureStep('Validate if the radio button is selected')
  validateRadioButtonSelected(label: string): void {
    cy.get(this.INPUT_RADIO.replace('$$', this.RADIO_IDS[label])).should('be.checked');
  }

  @AllureStep('Validate if the radio button is in a disabled state')
  validateRadioButtonDisabled(label: string): void {
    cy.get(this.INPUT_RADIO.replace('$$', this.RADIO_IDS[label])).should('be.disabled');
  }

  @AllureStep('Check the result of the selected radio button')
  validateRadioButtonResult(expectedResult: string): void {
    cy.contains(this.RADIO_BUTTON_RESULT).find('span').should('contain.text', expectedResult);
  }

  @AllureStep('Validate whether radio button labels are visible')
  validateRadioButtonLabelVisibility(): void {
    this.validateRadioButtonLabel('Yes')
    this.validateRadioButtonLabel('Impressive')
    this.validateRadioButtonLabel('No')
  }

  @AllureStep('Validate whether radio button inputs are visible')
  validateRadioButtonInputVisibility(): void {
    this.validateRadioButtonInput('Yes');
    this.validateRadioButtonInput('Impressive');
    this.validateRadioButtonInput('No');
  }

  @AllureStep('Check if the radio buttons are visible')
  validateRadioButtonVisibility(): void {
    this.validateRadioButtonLabelVisibility();
    this.validateRadioButtonInputVisibility();
  }

  @AllureStep('Select the radio button and validate that the item was selected')
  selectAndValidateRadioButton(label: string): void {
    this.clickRadioButton(label);
    this.validateRadioButtonSelected(label);
    this.validateRadioButtonResult(label);
  }
}
