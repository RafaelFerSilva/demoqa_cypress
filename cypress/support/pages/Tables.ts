import { User } from '../api/types';
import { AllureStep } from '../utils/allure-step.decorator';

export default class Tables {
  TABLE_SEARCH_BOX = '[id=searchBox]'
  TABLE = '.ReactTable'
  TABLE_ROW_ITEM = "//div[contains(@class, 'rt-td') and text()='$$']//ancestor::div[contains(@class, 'rt-tr-group')]"
  TABLE_ROW_ITEM_EDIT = `${this.TABLE_ROW_ITEM}//span[@title="Edit"]`
  TABLE_ROW_ITEM_DELETE = `${this.TABLE_ROW_ITEM}//span[@title="Delete"]`
  TABLE_ROWS_NOT_FOUND = '.rt-noData'
  DELETE_ICON = "//span[@title='Delete']"

  ADD_NEW_RECORD_BUTTON = '[id=addNewRecordButton]'
  MODAL_HEADER = '.modal-header'
  MODAL_HEADER_CLOSE = '.close'
  MODAL_HEADER_FIRST_NAME = '[id=firstName]'
  MODAL_HEADER_LAST_NAME = '[id=lastName]'
  MODAL_HEADER_EMAIL = '[id=userEmail]'
  MODAL_HEADER_AGE = '[id=age]'
  MODAL_HEADER_FIRST_SALARY = '[id=salary]'
  MODAL_HEADER_DEPARTMENT = '[id=department]'
  MODAL_HEADER_BUTTON_SUBMIT = '[id=submit]'

  // Add a selector for elements by placeholder
  INPUT_BY_PLACEHOLDER = 'input[placeholder="$$"]'

  @AllureStep('Check if the Add button is visible')
  checkAddButtonVisibility() {
    return cy.get(this.ADD_NEW_RECORD_BUTTON).should('be.visible');
  }

  @AllureStep('Get element by placeholder text')
  getElementByPlaceholder(placeholderText: string, exact = true) {
    if (exact) {
      return cy.get(this.INPUT_BY_PLACEHOLDER.replace('$$', placeholderText));
    } else {
      return cy.get(`input[placeholder*="${placeholderText}"]`);
    }
  }

  @AllureStep('Type in element with placeholder')
  typeInElementByPlaceholder(placeholderText: string, text: string, exact = true) {
    return this.getElementByPlaceholder(placeholderText, exact).type(text);
  }

  @AllureStep('Check if the search input is visible')
  checkSearchInputVisibility() {
    return this.getElementByPlaceholder('Type to search', true)
  }

  @AllureStep('Check if the table is visible on the screen')
  checkTableVisibility() {
    cy.get(this.TABLE).contains('First Name');
    cy.get(this.TABLE).contains('Last Name');
    cy.get(this.TABLE).contains('Age');
    cy.get(this.TABLE).contains('Email');
    cy.get(this.TABLE).contains('Salary');
    cy.get(this.TABLE).contains('Department');
    cy.get(this.TABLE).contains('Action');
  }

  @AllureStep('Check the contents of a cell in the table')
  checkCellContents(content: string) {
    return cy.xpath(this.TABLE_ROW_ITEM.replace('$$', content));
  }

  @AllureStep('Check if the contents of a cell are not in the table')
  checkCellNotInTable(content: string) {
    return cy.xpath(this.TABLE_ROW_ITEM.replace('$$', content)).should('not.exist');
  }

  @AllureStep('Insert text in the search field')
  insertTextInSearchField(text: string) {
    return cy.get(this.TABLE_SEARCH_BOX).type(text);
  }

  @AllureStep('Click on the button to delete a row from the table')
  deleteRowFromTable(content: string) {
    return cy.xpath(this.TABLE_ROW_ITEM_DELETE.replace('$$', content)).click();
  }

  @AllureStep('Check if the table is empty')
  checkIfTableIsEmpty() {
    return cy.get(this.TABLE_ROWS_NOT_FOUND).should('have.text', 'No rows found');
  }

  @AllureStep('Click to remove each item from the table')
  removeAllItemsFromTable() {
    cy.xpath(this.DELETE_ICON).each($el => {
      // Sempre clique no primeiro elemento
      cy.xpath(this.DELETE_ICON).eq(0).click();
    });
    cy.log('All items have been removed from the table');
  }

  @AllureStep('Click on the button to edit a row in the table')
  editRowInTable(content: string) {
    return cy.xpath(this.TABLE_ROW_ITEM_EDIT.replace('$$', content)).click();
  }

  @AllureStep('Click on the button to open the item registration form in the table')
  openItemRegistrationForm() {
    return cy.get(this.ADD_NEW_RECORD_BUTTON).click();
  }

  @AllureStep('Check if the registration modal is visible')
  checkRegistrationModalVisibility(state: string = 'be.visible', timeout: number = 10000) {
    return cy.get(this.MODAL_HEADER,{ timeout: timeout }).should(state);
  }

  @AllureStep('Click to close table record modal')
  closeTableRecordModal() {
    return cy.get(this.MODAL_HEADER_CLOSE).click();
  }

  @AllureStep('Insert a value in the name field')
  insertValueInNameField(value: string) {
    return cy.get(this.MODAL_HEADER_FIRST_NAME).clear().type(value);
  }

  @AllureStep('Insert a value in the last name field')
  insertValueInLastNameField(value: string) {
    return cy.get(this.MODAL_HEADER_LAST_NAME).clear().type(value);
  }

  @AllureStep('Insert a value in the email field')
  insertValueInEmailField(value: string) {
    return cy.get(this.MODAL_HEADER_EMAIL).clear().type(value);
  }

  @AllureStep('Insert a value in the age field')
  insertValueInAgeField(value: string) {
    return cy.get(this.MODAL_HEADER_AGE).clear().type(value);
  }

  @AllureStep('Insert a value in the salary field')
  insertValueInSalaryField(value: string) {
    return cy.get(this.MODAL_HEADER_FIRST_SALARY).clear().type(value);
  }

  @AllureStep('Insert a value in the department field')
  insertValueInDepartmentField(value: string) {
    return cy.get(this.MODAL_HEADER_DEPARTMENT).clear().type(value);
  }

  @AllureStep('Click on the submit button on the table registration form')
  clickSubmitButton() {
    return cy.get(this.MODAL_HEADER_BUTTON_SUBMIT).click();
  }

  @AllureStep('Validate the page elements Table')
  validatePageElementsTable() {
    this.checkAddButtonVisibility()
    this.checkSearchInputVisibility()
    this.checkTableVisibility()
  }

  @AllureStep('Validate the default content of the table')
  validateDefaultTableContent() {
    this.checkCellContents('Cierra')
    this.checkCellContents('Legal')
    this.checkCellContents('alden@example.com')
  }

  @AllureStep('Search for an item in the table and validate that it is visible')
  searchAndValidateItemInTable(item: string) {
    this.insertTextInSearchField(item);
    this.checkCellContents(item);
  }

  @AllureStep('Delete a row from the table')
  deleteARowFromTable(item: string) {
    this.deleteRowFromTable(item);
    this.checkCellNotInTable(item)
  }

  @AllureStep('Delete all items from the table')
  deleteAllItemsFromTable() {
    this.removeAllItemsFromTable()
    this.checkIfTableIsEmpty()
  }

  @AllureStep('Open the table item registration modal')
  openItemRegistrationModal() {
    this.openItemRegistrationForm()
    this.checkRegistrationModalVisibility()
  }

  @AllureStep('Close the modal for registering items in the table')
  closeRegisterTableRecordModal() {
    this.closeTableRecordModal()
    this.checkRegistrationModalVisibility('not.be.visible')
  }

  @AllureStep('Fill in the registration modal data from the table')
  fillRegistrationModalData(data: User ) {
    this.insertValueInNameField(data.userName);
    this.insertValueInLastNameField(data.lastName);
    this.insertValueInEmailField(data.email);
    this.insertValueInAgeField(data.age);
    this.insertValueInSalaryField(data.salary);
    this.insertValueInDepartmentField(data.department);
  }

  @AllureStep('Register a new item in the table')
  registerNewItemOnTable(data: User ) {
    this.fillRegistrationModalData(data);
    this.clickSubmitButton()
  }

}