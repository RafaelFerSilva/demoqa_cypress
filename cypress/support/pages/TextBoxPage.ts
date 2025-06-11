import { User } from "../api/types"
import { AllureStep } from "../utils/allure-step.decorator"

export default class TextBox {
  INPUT_USER_NAME=                             '[id=userName]'     
  INPUT_USER_EMAIL=                            '[id=userEmail]'
  TEXT_AREA_CURRENT_ADDRESS=                   '//textarea[@id="currentAddress"]'
  TEXT_AREA_PERMANENT_ADDRESS=                 '//textarea[@id="permanentAddress"]'
  SUBMIT_BUTTON=                               '[id=submit]'

  OUTPUT_USER_NAME=                            '\#output  \#name '
  OUTPUT_USER_EMAIL=                           '\#output  \#email '
  OUTPUT_CURRENT_ADDRESS=                      '\#output  \#currentAddress '
  OUTPUT_PERMANENT_ADDRESS=                    '\#output  \#permanentAddress'


  @AllureStep('Validate if the input for the user name is visible')
  validateIfInputForUserNameIsVisible() {
    return cy.get(this.INPUT_USER_NAME).should('be.visible');
  }

  @AllureStep('Insert text into the users name field')
  inserTextIntoTheUserNameField(text: string) {
    return cy.get(this.INPUT_USER_NAME).type(text);
  }

  @AllureStep('Clear text in users name field')
  clearUserNameField() {
    return cy.get(this.INPUT_USER_NAME).clear();
  }

  @AllureStep('Validate whether the input for the users email is visible')
  validateWhetherTheInputForUserEmailIsVisible() {
    return cy.get(this.INPUT_USER_EMAIL).should('be.visible');
  }

  @AllureStep('Insert text into the users email field')
  insertTextIntoTheUserEmailField(text: string) {
    return cy.get(this.INPUT_USER_EMAIL).type(text);
  }

  @AllureStep('Clear text in users email field')
  clearUserEmailField() {
    return cy.get(this.INPUT_USER_EMAIL).clear();
  }

  @AllureStep('Validate that the input for the users current address is visible')
  validateIfInputForCurrentAddressIsVisible() {
    return cy.xpath(this.TEXT_AREA_CURRENT_ADDRESS).should('be.visible');
  }

  @AllureStep('Insert text into the users current address field')
  insertTextIntoTheUserCurrentAddressField(text: string) {
    return cy.xpath(this.TEXT_AREA_CURRENT_ADDRESS).type(text);
  }

  @AllureStep('Clear text in users current address field')
  clearUserCurrentAddressField() {
    return cy.xpath(this.TEXT_AREA_CURRENT_ADDRESS).clear();
  }


  @AllureStep('Validate that the input for the users permanent address is visible')
  validateIfInputForPermanentAddressIsVisible() {
    return cy.xpath(this.TEXT_AREA_PERMANENT_ADDRESS).should('be.visible');
  }

  @AllureStep('Insert text into the users permanent address field')
  insertTextIntoTheUserPermanentAddressField(text: string) {
    return cy.xpath(this.TEXT_AREA_PERMANENT_ADDRESS).type(text);
  }

  @AllureStep('Clear text in users permanent address field')
  clearUserPermanentAddressField() {
    return cy.xpath(this.TEXT_AREA_PERMANENT_ADDRESS).clear();
  }

  @AllureStep('Validate if the submit button is visible')
  validateIfSubmitButtonIsVisible() {
    return cy.get(this.SUBMIT_BUTTON).should('be.visible');
  }

  @AllureStep('Click on the submit button')
  clickSubmitButton() {
    return cy.get(this.SUBMIT_BUTTON).click();
  }

  @AllureStep('Check if the user name is being displayed in the Text Box screen form output')
  checkUserNameDisplay(text: string) {
    return cy.get(this.OUTPUT_USER_NAME).should('contain.text', `Name:${text}`);
  }

  @AllureStep('Check if the user email is being displayed in the Text Box screen form output')
  checkUserEmailDisplay(text: string) {
    return cy.get(this.OUTPUT_USER_EMAIL).should('contain.text', `Email:${text}`);
  }

  @AllureStep('Check if the current address is being displayed in the Text Box screen form output')
  checkCurrentAddressDisplay(text: string) {
    return cy.get(this.OUTPUT_CURRENT_ADDRESS).should('contain.text', `Current Address :${text.replace('\n', ' ')}`);
  }

  @AllureStep('Check if the permanent address is being displayed in the Text Box screen form output')
  checkPermanentAddressDisplay(text: string) {
    return cy.get(this.OUTPUT_PERMANENT_ADDRESS).should('contain.text', `Permananet Address :${text.replace('\n', ' ')}`);
  }
  
  @AllureStep('Validate if the Text Box screen form is visible')
  validateIfTextBoxFormIsVisible() {
    this.validateIfInputForUserNameIsVisible()
    this.validateWhetherTheInputForUserEmailIsVisible()
    this.validateIfInputForCurrentAddressIsVisible()
    this.validateIfInputForPermanentAddressIsVisible()
    this.validateIfSubmitButtonIsVisible()
  }

  @AllureStep('Fill in the form fields on the Text Box screen')
  fillInTheFormFields(user: User) {
    this.inserTextIntoTheUserNameField(user.userName);
    this.insertTextIntoTheUserEmailField(user.email);
    this.insertTextIntoTheUserCurrentAddressField(user.current_address);
    this.insertTextIntoTheUserPermanentAddressField(user.permanent_address);
  }

  @AllureStep('Clear the Text Box screen form fields')
  clearAllTextBoxFields(){
    this.clearUserNameField()
    this.clearUserEmailField()
    this.clearUserCurrentAddressField()
    this.clearUserPermanentAddressField()
  }

  @AllureStep('Check the output of the Text Box screen form fields')
  checkOutputOfTextBoxFields(user: User) {
    this.checkUserNameDisplay(user.userName);
    this.checkUserEmailDisplay(user.email);
    this.checkCurrentAddressDisplay(user.current_address);
    this.checkPermanentAddressDisplay(user.permanent_address);
  }
}