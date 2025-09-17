import { registerAndLogin } from "../support/registerAndLogin";

describe("Fund Transfer", () => {
  let user;

  beforeEach(() => {
    cy.fixture("users").then((users) => {
      user = users.newUser2;
      user.username = user.username + Date.now();
    });
  });

  it("Should register and then login", () => {
    registerAndLogin(user);
    cy.contains("Transfer Funds").click();
    cy.get("#amount").type("100");
    cy.get("#fromAccountId");
    cy.get("#toAccountId");

    cy.intercept("POST", "/bank/transfer").as("transfer");
    cy.get('input[type="submit"]').click();

    cy.url().should("include", "transfer.htm");
    cy.contains("Transfer Complete").should("exist");
  });
});
