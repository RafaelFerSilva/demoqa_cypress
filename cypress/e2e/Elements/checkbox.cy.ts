import HomePage from '../../support/pages/HomePage'
import SideMenu from '../../support/pages/side_menu'
import CheckboxPage from '../../support/pages/checkbox'

describe('Checkbox Test Suite', () => {
  let homePage: HomePage
  let sideMenu: SideMenu
  let checkboxPage: CheckboxPage

  beforeEach(() => {
    homePage = new HomePage()
    sideMenu = new SideMenu()
    checkboxPage = new CheckboxPage()
    homePage.visitHomePage()
    homePage.clickOnHomeCard('Elements', '/elements');
    sideMenu.clickOnMenuItem('Check Box')
  })

  afterEach(() => {
    homePage.clickOnHomePageHeaderImg()
    homePage.validateHomePageLoaded()
  })

  it('The Desktop, Documents and Downloads check boxes must be displayed when expanding the Home check box', () => {
    checkboxPage.clickOnCheckBox('Home')
    checkboxPage.validateHomeSubCheckBoxesVisibility()
  });

  it('The name of all checkboxes must be displayed when selecting the home checkbox', () => {
    checkboxPage.selectCheckBox('Home')
    checkboxPage.areAllCheckBoxesDisplayedInResults()
  })
})