import HomePage from "cypress/support/pages/HomePage";
import LinksPage from "cypress/support/pages/LinksPage";
import SideMenu from "cypress/support/pages/SideMenu";


describe('Links Page Tests', () => {
  let homePage: HomePage
  let sideMenu: SideMenu
  let linksPage: LinksPage

  beforeEach(() => {
    homePage = new HomePage()
    sideMenu = new SideMenu()
    linksPage = new LinksPage()
    homePage.visitHomePage()
    homePage.clickOnHomeCard('Elements', '/elements');
    sideMenu.clickOnMenuItem('Links')
  })

  afterEach(() => {
    homePage.clickOnHomePageHeaderImg()
    homePage.validateHomePageLoaded()
  })

  it('It should be possible to make an API call by clicking the links', () => {
    linksPage.clickOnLinkToSendApiCall('Created');
    linksPage.clickOnLinkToSendApiCall('No Content');
    linksPage.clickOnLinkToSendApiCall('Moved');
    linksPage.clickOnLinkToSendApiCall('Bad Request');
    linksPage.clickOnLinkToSendApiCall('Unauthorized');
    linksPage.clickOnLinkToSendApiCall('Forbidden');
    linksPage.clickOnLinkToSendApiCall('Not Found');
  })

});