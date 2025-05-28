import { AllureStep } from '../utils/allure-step.decorator';

export default class CheckBoxPage {
  CHECK_BOX_ITEMS = { Home: 'home', Desktop: 'desktop', Documents: 'documents', Downloads: 'downloads' };
  CHECK_BOX_EXPANDED = '//span[text()="$$"]//ancestor::li[contains(@class, "rct-node-expanded")]';
  CHECK_BOX_COLLAPSED = '//span[text()="$$"]//ancestor::li[contains(@class, "rct-node-collapsed")]';
  CHECK_BOX_ITEM = '//span[text()="$$"]//ancestor::span[contains(@class, "rct-text")]';
  CHECK_BOX_TOGGLE_BUTTON = `${this.CHECK_BOX_ITEM}//button`;
  CHECKBOX_LABEL = '[for=tree-node-$$]';
  CHECKBOX_INPUT = '[id=tree-node-$$]';
  CHECKBOX_TEXT_RESULT = '#result > span.text-success';
  CHECKBOX_TEXT_RESULT_LIST = ['home', 'desktop', 'notes', 'commands', 'documents', 'workspace', 'react', 'angular', 'veu', 'office', 'public', 'private', 'classified', 'general', 'downloads', 'wordFile', 'excelFile'];

  @AllureStep('Click on the check box toggle button')
  clickOnCheckBox(item: string) {
    cy.xpath(this.CHECK_BOX_TOGGLE_BUTTON.replace('$$', item)).click({ force: true });
  }

  @AllureStep('Check if the check box is expanded')
  isCheckBoxExpanded(check_box: string) {
    cy.xpath(this.CHECK_BOX_EXPANDED.replace('$$', check_box)).should('exist');
  }

  @AllureStep('Check if the check box is collapsed')
  isCheckBoxCollapsed(check_box: string) {
    cy.xpath(this.CHECK_BOX_COLLAPSED.replace('$$', check_box)).should('exist');
  }

  @AllureStep('Check if the check box is visible')
  isCheckBoxVisible(check_box: string) {
    cy.get(this.CHECKBOX_LABEL.replace('$$', this.CHECK_BOX_ITEMS[check_box])).should('be.visible');
  }

  @AllureStep('Check if the check box is not visible')
  isCheckBoxNotVisible(check_box: string) {
    cy.get(this.CHECKBOX_LABEL.replace('$$', this.CHECK_BOX_ITEMS[check_box])).should('not.be.visible');
  }

  @AllureStep('Select the check box')
  selectCheckBox(check_box: string) {
    cy.get(this.CHECKBOX_LABEL.replace('$$', this.CHECK_BOX_ITEMS[check_box])).click();
  }

  @AllureStep('Validate if the check box ${check_box} is selected')
  isCheckBoxSelected(check_box: string) {
    cy.get(this.CHECKBOX_INPUT.replace('$$', this.CHECK_BOX_ITEMS[check_box])).should('be.checked');
  }

  @AllureStep('Validate whether a selected checkbox is being displayed in the results session')
  isCheckBoxDisplayedInResults(check_box: string) {
    cy.get(this.CHECKBOX_TEXT_RESULT).contains(check_box).should('be.visible');
  }

  @AllureStep('Validate whether a list of all checkboxes are being displayed in the results section')
  areAllCheckBoxesDisplayedInResults() {
    this.CHECKBOX_TEXT_RESULT_LIST.forEach((checkBox) => {
      this.isCheckBoxDisplayedInResults(checkBox);
    });
  }

  @AllureStep('Validate the checkbox items being displayed in the results section')
  isCheckBoxsDisplayedInResults(check_boxs: string[]) {
    check_boxs.forEach((check_box) => {
      this.isCheckBoxDisplayedInResults(check_box);
    });
  }

  @AllureStep('Validate if the check box is not selected')
  isCheckBoxNotSelected(check_box: string) {
    cy.get(this.CHECKBOX_INPUT.replace('$$', check_box)).should('not.be.checked');
  }

  @AllureStep('Uncheck the checkbox')
  uncheckCheckBox(check_box: string) {
    cy.get(this.CHECKBOX_LABEL.replace('$$', this.CHECK_BOX_ITEMS[check_box])).click();
  }

  @AllureStep('Click to expand the check box group')
  expandCheckBoxGroup(check_box: string) {
    this.clickOnCheckBox(check_box);
    this.isCheckBoxExpanded(check_box);
  }

  @AllureStep('Click to collapse the check box group')
  collapseCheckBoxGroup(check_boox: string) {
    this.clickOnCheckBox(check_boox);
    this.isCheckBoxCollapsed(check_boox);
  }

  @AllureStep('Select a check box item')
  selectCheckBoxItem(check_box: string) {
    this.selectCheckBox(check_box);
    this.isCheckBoxSelected(check_box);
  }

  @AllureStep('Validate that the sub check boxes of the Home check box are visible')
  validateHomeSubCheckBoxesVisibility() {
    this.isCheckBoxVisible('Desktop');
    this.isCheckBoxVisible('Documents');
    this.isCheckBoxVisible('Downloads');
  }

  @AllureStep('Unmark the check box for item')
  uncheckCheckBoxItem(item: string) {
    this.isCheckBoxSelected(item);
    this.uncheckCheckBox(item);
  }

}