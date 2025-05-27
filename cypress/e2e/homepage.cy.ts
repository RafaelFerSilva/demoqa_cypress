import HomePage from '../support/pages/HomePage'

describe('Home Page Test Suite', () => {
  let homePage: HomePage

  beforeEach(() => {
    homePage = new HomePage()
    homePage.visitHomePage()
  })

  afterEach(() => {
    homePage.clickOnHomePageHeaderImg()
    homePage.validateHomePageLoaded()
  })

  it('should navigate to specific pages when home cards are clicked', () => {
    const cardsAndUrls = [
      { title: 'Elements', url: '/elements' },
      { title: 'Forms', url: '/forms' },
      { title: 'Alerts, Frame & Windows', url: '/alertsWindows' },
      { title: 'Widgets', url: '/widgets' },
      { title: 'Interactions', url: '/interaction' },
      { title: 'Book Store Application', url: '/books' }
    ];
  
    cardsAndUrls.forEach(({ title, url }) => {
      homePage.clickOnHomeCard(title, url);
      homePage.clickOnHomePageHeaderImg()
      homePage.validateHomePageLoaded()
    });
  });
})