import HomePage from '../../support/pages/HomePage'
import SideMenu from '../../support/pages/SideMenu'
import CheckboxPage from '../../support/pages/CheckBoxPage'

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
    checkboxPage.expandCheckBoxGroup('Home')
    checkboxPage.validateHomeSubCheckBoxesVisibility()
  });

  it('The name of all checkboxes must be displayed when selecting the home checkbox', () => {
    checkboxPage.selectCheckBoxItem('Home')
    checkboxPage.areAllCheckBoxesDisplayedInResults()
  })

  it('The name of the check boxes related to the Downloads check box must be displayed in the result section when we select Downloads', () => {
    checkboxPage.expandCheckBoxGroup('Home')
    checkboxPage.selectCheckBoxItem('Downloads')
    checkboxPage.isCheckBoxsDisplayedInResults(['downloads', 'wordFile', 'excelFile'])
  })

  it('The name of the check boxes related to the Desktop check box must be displayed in the result section when we select Desktop', () => {
    checkboxPage.expandCheckBoxGroup('Home')
    checkboxPage.selectCheckBoxItem('Desktop')
    checkboxPage.isCheckBoxsDisplayedInResults(['desktop', 'notes', 'commands'])
  })
})