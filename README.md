# Cypress E2E Tests – Parabank (Demo Bank)

## Description

This repository contains end-to-end tests written in **Cypress** for the Parabank demo banking application.  
The tests cover, among others:

- full user flows: registration → login → money transfer,
- checking account balances,
- form validations,
- error handling for invalid transfers,
- API requests interception for money transfers.

Demo site: [Parabank](https://parabank.parasoft.com/parabank/index.htm)

## Requirements

- [Node.js](https://nodejs.org/) (>= 16)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

Clone the repository and install dependencies:

- git clone https://github.com/peter-stefanski/Cypress-E2E-Tests-Parabank-Demo-Bank-.git
- cd Project_04
- npm install

# Running Cypress Tests

## Open Cypress Test Runner (Interactive Mode)

npx cypress open

## Run Cypress in Headless Mode (CLI)

npx cypress run

## Base URL

- Make sure your TodoMVC React app is running locally.

- Default URL used in tests:

https://parabank.parasoft.com/parabank/index.htm

- You can change this in cypress.config.js if needed.

## Notes

- Ensure the app is accessible before executing tests.

- You can use data-testid or other reliable selectors in your tests to locate elements.

- Test data (e.g., user accounts) can be adjusted in Cypress fixtures.

- Use cy.intercept() to capture or mock API requests (useful for money transfer flows).
