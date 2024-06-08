const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "viewportWidth": 1000,
  "viewportHeight": 660,
  "video": false,
  "chromeWebSecurity": false,
  "integrationFolder": "test",
  "reporter": "mochawesome",
  "testFiles": ["**/*.test.js"],
  "pluginsFile": false,
  "defaultCommandTimeout": 10000,
  "reporterOptions": {
      "overwrite": "false",
      "reportPageTitle": "Automated Test Status",
      "reportTitle": "Automated Test Reporting Dashboard",
      "showPassed": "true",
      "autoOpen": "false",
      "charts": "true",
      "code": "false"
  },
  "lint-staged": {
    "*.{js,md}": "prettier --write --ignore-unknown"
  }
});
