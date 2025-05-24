import HomePage from '../support/pages/HomePage'

describe('Home Page Test Suite', () => {
  let homePage: HomePage

  before(() => {
    homePage = new HomePage()
    homePage.visitHomePage()
  })

  it('The home page must be accessed when we access the url of the DEMOQA website', () => {
    homePage.validateHomePageLoaded()
  })
})