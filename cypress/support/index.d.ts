declare namespace Cypress {
  interface Chainable<Subject = any> {
    dbConnect(): Chainable<void>;
    dbClose(): Chainable<void>;
    dbExecuteScript(scriptPath: string): Chainable<any[]>;
    dbReplaceAndExecute(scriptPath: string, values: any[]): Chainable<any[]>;
    returnAllUsers(): Chainable<any[]>;
    validateUrl(expectedUrl: string): Chainable<void>;
    validateUrlContains(partialUrl: string): Chainable<void>;
  }
}
