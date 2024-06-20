import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import 'cypress-iframe';

Given('I am on the "testingwithclarity" page', () => {
  cy.visit('https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html')
})

When('I click on the "Button Click" button', () => {
  cy.get('[id="buttonClick"]').click()
})

Then('I should see the message "Click Done"', () => {
  cy.get('[id="buttonClickMsg"]').should('have.text', 'Click Done')
})

When('I click on the "Button DblClick" button', () => {
  cy.get('[id="buttonDblClick"]').dblclick()
 })

Then('I should see the message "DblClick Done"', () => {
  cy.get('[id="buttonDblClickMsg"]').should('have.text', 'DblClick Done')
})

When('I move the mouse over the "Button MouseOver" button', () => {
  cy.get('[id="buttonMouseOver"]').trigger('mouseover')
})

Then('I should see the message "MouseOver Done"', () => {
  cy.get('[id="buttonMouseOverMsg"]').should('have.text', 'MouseOver Done')
})

function closeOverlayIfPresent() {
  cy.document().then((doc) => {
    if (doc.getElementById('overlay')) {
      cy.get('[id^="CloseOverlay"]').click();
    }
  })
}

Given('I am on the "testingwithclarity" page with an overlay', () => {
  cy.visit('https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html?withOverlay')
})

When('I insert a value in the "Input 1" text field', () => {
  // closeOverlayIfPresent()
  cy.get('[id="input_text1"]').type('Hello World')
  cy.get('[id="input_text1"]').should('have.value', 'Hello World')
})

When('I click on the "Propagate" button', () => {
  // closeOverlayIfPresent()
  cy.get('[id="propagate"]').click()
})

Then('I should see the same value in the three other input fields', () => {
  cy.get('[id="input_text1"]').should('have.value', 'Hello World')
  cy.get('[id="input_text2"]').should('have.value', 'Hello World')
  cy.get('[id="input_text3"]').should('have.value', 'Hello World')
  cy.get('[id="input_text4"]').should('have.value', 'Hello World')
})

When('I click on the "Clear All" button', () => {
  closeOverlayIfPresent()
  cy.contains('button', 'Clear All').click()
})

Then('I should see all the input fields empty', () => {
  cy.get('[id="input_text1"]').should('have.value', '')
  cy.get('[id="input_text2"]').should('have.value', '')
  cy.get('[id="input_text3"]').should('have.value', '')
  cy.get('[id="input_text4"]').should('have.value', '')
  Cypress.on('uncaught:exception', () => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})

