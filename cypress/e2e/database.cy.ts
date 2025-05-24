// read README.md for execution instructions
describe('Test DB', () => {
  before(() => {
    cy.dbConnect();
  });

  after(() => {
    cy.dbClose();
  });

  it('executa script SQL', () => {
    cy.dbExecuteScript('cypress/sql/test.sql').then((users) => {
      expect(users).to.be.an('array');
      expect(users.length).to.be.greaterThan(0);
      cy.log(`Primeiro usuário: ${users[0].name}`);
    });
  });

  it('executa script com replace', () => {
    cy.dbReplaceAndExecute('cypress/sql/users_replace.sql', ['users', 1]).then((user) => {
      expect(user[0].id).to.equal(1);
      cy.log(`User: ${user[0].name}`);
    });
  });
});