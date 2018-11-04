// ***********************************************************
// This example support/index.js is processed and
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
// import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


before(function () {
  context('Login', () => {
    cy.visit('/login');
    cy.get('input[type="email"]')
    .type('game@yopmail.com').should('have.value', 'game@yopmail.com');
    cy.get('input[type="password"]')
    .type('cccc').should('have.value', 'cccc');
    cy.get('input[type="submit"]')
    .contains('Login').click();

  })
})
