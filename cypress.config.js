const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env:{
    api_url:"https://restful-booker.herokuapp.com/booking?firstname=Sally",
    frontend_url:"https://automationintesting.online"        
  },
  experimentalStudio: true,
  //Stopping cypress from running for each change 
  //watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    experimentalWebKitSupport:true,
    includeShadowDom: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl = 'https://automationintesting.online';
      config.watchForFileChanges = false;      
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    //Using this all tests can be run by one click, button is visible in Specs on runner
    experimentalRunAllSpecs:true,
    //testIsolation: false
  },
});
