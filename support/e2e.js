// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
import '@bahmutov/cy-api'
import 'cypress-real-events/support'
import 'cypress-axe'
import 'cypress-plugin-multiple-click';

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

Cypress.Commands.add("dragTo",{ prevSubject:"element"},(subject,targetE1) => {
    const dataTransfer = new DataTransfer();
    cy.get(subject).trigger('dragstart',{
        dataTransfer
    })
    cy.get(targetE1).trigger('drop',{
        dataTransfer
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  const app = window.top;
  if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
   const style = app.document.createElement("style");
   style.innerHTML =".command-name-request, .command-name-xhr { display: none }";
   style.setAttribute("data-hide-command-log-request", "");
   app.document.head.appendChild(style); 
  }
