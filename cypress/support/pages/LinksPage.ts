import { AllureStep } from "../utils/allure-step.decorator"

export default class LinksPage {
  LINKS_H5_TITLE = '[id=linkWrapper]  >>   h5  >>  text=$$'
  LINKS = { Home: '[id=simpleLink]', 'Home Dinamico': '[id=dynamicLink]', Created: '[id=created]', 'No Content': '[id=no-content]', Moved: '[id=moved]', 'Bad Request': '[id=bad-request]', Unauthorized: '[id=unauthorized]', Forbidden: '[id=forbidden]', 'Not Found': '[id=invalid-url]' }
  API_LINK_RESPONSE = { Created: '201', 'No Content': '204', 'Moved Permanently': '301', 'Bad Request': '400', Unauthorized: '401', Forbidden: '403', 'Not Found': '404' }
  SIMPLE_LINK = '[id=simpleLink]'
  DYNAMIC_LINK = '[id=dynamicLink]'
  CREATED = '[id=created]'
  NO_CONTENT = '[id=no-content]'
  MOVED = '[id=moved]'
  BAD_REQUEST = '[id=bad-request]'
  UNAUTORIZED = '[id=unauthorized]'
  FORBIDDEN = '[id=forbidden]'
  INVALID_URL = '[id=invalid-url]'
  LINK_RESPONSE = '[id=linkResponse]'
  LINK_RESPONSE_TEXT = '//p[@id="linkResponse" and normalize-space()="Link has responded with staus $$ and status text $$"]'

  @AllureStep('Check the subtitle of the links screen')
  checkSubtitle(subtitle: string) {
    cy.get(this.LINKS_H5_TITLE.replace('$$', subtitle)).should('have.text', subtitle)
  }

  @AllureStep('Check if the link is visible on the screen')
  checkLinkVisibility(link: string) {
    cy.get(this.LINKS[link]).should('be.visible')
  }

  @AllureStep('Click on link')
  clickOnLink(link: string) {
    cy.get(this.LINKS[link]).click()
  }

  @AllureStep('Validate the response text of the API link')
  validateApiResponse(link: string) {
    cy.xpath(this.LINK_RESPONSE_TEXT.replace('$$', this.API_LINK_RESPONSE[link]).replace('$$', link))
      .should('be.visible')
  }

  @AllureStep('Validate if the links section to open a new tab is visible')
  validateLinksSectionVisibility() {
    cy.get(this.LINKS_H5_TITLE.replace('$$', 'Following links will open new tab')).should('have.text', 'Following links will open new tab')
    this.checkLinkVisibility('Home')
    this.checkLinkVisibility('Home Dinamico')
  }

  @AllureStep('Validate if the links section to send an API call is visible')
  validateApiLinksSectionVisibility() {
    cy.get(this.LINKS_H5_TITLE.replace('$$', 'Following links will send an api call')).should('have.text', 'Following links will send an api call')
    this.checkLinkVisibility('Created')
    this.checkLinkVisibility('No Content')
    this.checkLinkVisibility('Moved')
    this.checkLinkVisibility('Bad Request')
    this.checkLinkVisibility('Unauthorized')
    this.checkLinkVisibility('Forbidden')
    this.checkLinkVisibility('Not Found')
  }

  @AllureStep('Click on the link to send a call to the API')
  clickOnLinkToSendApiCall(link: string) {
    this.clickOnLink(link)
    if (link == 'Moved') {
      this.validateApiResponse('Moved Permanently')
    } else {
      this.validateApiResponse(link)
    }
  }

  @AllureStep('Access the new tab by clicking on the link')
  accessNewTab(link: string): void {
    cy.get(this.LINKS[link]).invoke('removeAttr', 'target').click();
  }
}