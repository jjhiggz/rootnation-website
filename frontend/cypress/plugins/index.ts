/// <reference types="cypress" />
/* eslint-disable */

// Cypress.config("baseUrl", "http://localhost:3000");

/**
 * @type {Cypress.PluginConfig}
 */

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on("before:browser:launch", (browser, launchOptions) => {
    if (browser.name === "chrome" && browser.isHeadless) {
      launchOptions.args.push("--disable-gpu");
      return launchOptions;
    }
  });
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};
