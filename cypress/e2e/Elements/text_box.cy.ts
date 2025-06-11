import HomePage from "cypress/support/pages/HomePage";
import SideMenu from "cypress/support/pages/SideMenu";
import TextBox from "cypress/support/pages/TextBoxPage";
import { createFakeUser } from "cypress/support/utils/faker.utils";


describe('Text Box Tests', () => {
  let homePage: HomePage
  let sideMenu: SideMenu
  let text_box: TextBox

  beforeEach(() => {
    homePage = new HomePage()
    sideMenu = new SideMenu()
    text_box = new TextBox()
    homePage.visitHomePage()
    homePage.clickOnHomeCard('Elements', '/elements');
    sideMenu.clickOnMenuItem('Text Box')
    text_box.validateIfTextBoxFormIsVisible()
  })

  afterEach(() => {
    text_box.clearAllTextBoxFields()
  });

  it('It must be possible to fill in the Text Box form fields', () => {
    const user = createFakeUser()
    text_box.fillInTheFormFields(user)
    text_box.clickSubmitButton()
    text_box.checkOutputOfTextBoxFields(user)
  });
});