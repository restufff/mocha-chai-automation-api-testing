import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "test/**/*.test.js",
    supportFile: false,
  },
  viewportWidth: 1000,
  viewportHeight: 660,
  video: false,
  chromeWebSecurity: false,
  reporter: "mochawesome",
  defaultCommandTimeout: 10000,
  reporterOptions: {
    overwrite: false,
    reportPageTitle: "Automated Test Status",
    reportTitle: "Automated Test Reporting Dashboard",
    reportDir: 'reports/mochawesome',
    showPassed: true,
    autoOpen: false,
    charts: true,
    code: false,
  },
});
