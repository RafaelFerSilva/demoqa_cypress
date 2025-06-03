import HomePage from "cypress/support/pages/HomePage";
import RadioButton from "cypress/support/pages/RadioButton";
import SideMenu from "cypress/support/pages/SideMenu";


describe('Radio Button Page Tests', () => {
  let homePage: HomePage
  let sideMenu: SideMenu
  let radioButton: RadioButton

  beforeEach(() => {
    homePage = new HomePage()
    sideMenu = new SideMenu()
    radioButton = new RadioButton()
    homePage.visitHomePage()
    homePage.clickOnHomeCard('Elements', '/elements');
    sideMenu.clickOnMenuItem('Radio')
  })

  afterEach(() => {
    homePage.clickOnHomePageHeaderImg()
    homePage.validateHomePageLoaded()
  })

  it('The text You have selected Yes must be returned when the radio button Yes is selected', () => {
    radioButton.selectAndValidateRadioButton('Yes')
  })

  it('The text You have selected Impressive must be returned when the radio button Impressive is selected', () => {
    radioButton.selectAndValidateRadioButton('Impressive')
  })

  it('The radio button must be disabled.', () => {
    radioButton.validateRadioButtonDisabled('No')
  })

});