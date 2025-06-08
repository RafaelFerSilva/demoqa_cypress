import HomePage from "cypress/support/pages/HomePage"
import SideMenu from "cypress/support/pages/SideMenu"
import Tables from "cypress/support/pages/Tables"
import { createFakeUser } from "cypress/support/utils/faker.utils"


describe('Table Tests', () => {
  let homePage: HomePage
  let sideMenu: SideMenu
  let tables: Tables

  beforeEach(() => {
    homePage = new HomePage()
    sideMenu = new SideMenu()
    tables = new Tables()
    homePage.visitHomePage()
    homePage.clickOnHomeCard('Elements', '/elements');
    sideMenu.clickOnMenuItem('Web Tables')
  })


  it('It must be possible to access the web tables screen', () => {
    tables.validatePageElementsTable()
    tables.validateDefaultTableContent()
  });

  it('It must be possible to search for an item by the Email column', () => {
    tables.searchAndValidateItemInTable('alden@example.com')
    tables.checkCellNotInTable('cierra@example.com')
    tables.checkCellNotInTable('kierra@example.com table')
  });

  it('It must be possible to search for an item by the Age column', () => {
    tables.searchAndValidateItemInTable('39')
    tables.checkCellNotInTable('40')
    tables.checkCellNotInTable('41')
  });

  it('It must be possible to search for an item by the nSalary column', () => {
    tables.searchAndValidateItemInTable('2000')
    tables.checkCellContents('12000')
    tables.checkCellNotInTable('10000')
  });

  it('It should be possible to remove an item from the table', () => {
    tables.deleteARowFromTable('Kierra')
  });

  it('It should be possible to remove all items from the table', () => {
    tables.deleteAllItemsFromTable()
    tables.checkIfTableIsEmpty()
  });

  it('It must be possible to register an item in the table', () => {
    const user = createFakeUser()
    tables.openItemRegistrationModal()
    tables.registerNewItemOnTable(user)
    tables.checkCellContents(user.userName)
  });

})