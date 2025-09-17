describe("Register and login", () => {
  let user;

  beforeEach(() => {
    cy.fixture("users").then((users) => {
      user = users.newUser2;
      user.username = user.username + Date.now();
    });
  });

  it("Should register and then login", () => {
    cy.visit("/");
    cy.contains("Register").click();
    cy.url().should("include", "/register.htm");

    cy.get('input[name="customer.firstName"]').type(user.firstName);
    cy.get('input[name="customer.lastName"]').type(user.lastName);
    cy.get('input[name="customer.address.street"]').type(user.address);
    cy.get('input[name="customer.address.city"]').type(user.city);
    cy.get('input[name="customer.address.state"]').type(user.state);
    cy.get('input[name="customer.address.zipCode"]').type(user.zip);
    cy.get('input[name="customer.phoneNumber"]').type(user.phone);
    cy.get('input[name="customer.ssn"]').type(user.ssn);
    cy.get('input[name="customer.username"]').type(user.username);
    cy.get('input[name="customer.password"]').type(user.password);
    cy.get('input[name="repeatedPassword"]').type(user.password);
    cy.get('input[value="Register"]').click();

    cy.contains(
      "Your account was created successfully. You are now logged in."
    );

    cy.contains("Log Out").click();

    cy.get('input[name="username"]').type(user.username);
    cy.get('input[name="password"]').type(user.password);
    cy.get('input[value="Log In"]').click();

    cy.url().should("include", "/overview.htm");
    cy.contains("Accounts Overview");
  });
});
