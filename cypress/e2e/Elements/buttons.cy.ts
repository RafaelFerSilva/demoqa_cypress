import HomePage from '../../support/pages/HomePage'
import SideMenu from '../../support/pages/side_menu'
import ButtonPage from '../../support/pages/buttonPage'

describe('Buttons Test Suite', () => {
  let homePage: HomePage
  let sideMenu: SideMenu
  let buttonPage: ButtonPage

  beforeEach(() => {
    homePage = new HomePage()
    sideMenu = new SideMenu()
    buttonPage = new ButtonPage()
    homePage.visitHomePage()
    homePage.clickOnHomeCard('Elements', '/elements');
    sideMenu.clickOnMenuItem('Buttons')
  })

  afterEach(() => {
    homePage.clickOnHomePageHeaderImg()
    homePage.validateHomePageLoaded()
  })

  it('The message You have done a double click should be displayed if you click on the button', () => {
    buttonPage.performeDoubleClickOnDoubleButton()
  });

  it('The message You have done a right click should be displayed if you click on the Right Click Me button', () => {
    buttonPage.performRightClickOnRightButton();
  });

  it('The message You have done a single click should be displayed if you click on the Click Me button', () => {
    buttonPage.performClickOnDynamicButton();
  });
})