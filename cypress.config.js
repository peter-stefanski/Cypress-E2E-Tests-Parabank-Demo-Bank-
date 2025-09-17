const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com/parabank",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
});
