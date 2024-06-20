import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import { TestingwithclarityPage } from '../support/pages/testingwithclarity_page'

const testingwithclarityPage = new TestingwithclarityPage()

Given('I am on the "testingwithclarity" page', () => {
  testingwithclarityPage.visit()
})

When('I click on the "Button Click" button', () => {
  testingwithclarityPage.clickButton('buttonClick')
})

Then('I should see the message "Click Done"', () => {
  testingwithclarityPage.verifyMessage('buttonClickMsg', 'Click Done')
})

When('I click on the "Button DblClick" button', () => {
  testingwithclarityPage.doubleClickButton('buttonDblClick')
})

Then('I should see the message "DblClick Done"', () => {
  testingwithclarityPage.verifyMessage('buttonDblClickMsg', 'DblClick Done')
})

When('I move the mouse over the "Button MouseOver" button', () => {
  testingwithclarityPage.mouseOverButton('buttonMouseOver')
})

Then('I should see the message "MouseOver Done"', () => {
  testingwithclarityPage.verifyMessage('buttonMouseOverMsg', 'MouseOver Done')
})

Given('I am on the "testingwithclarity" page with an overlay', () => {
  testingwithclarityPage.visitWithOverlay()
})

When('I insert a value in the "Input 1" text field', () => {
  testingwithclarityPage.closeOverlayIfPresent()
  testingwithclarityPage.typeInTextField('input_text1', 'Hello World')
})

When('I click on the "Propagate" button', () => {
  testingwithclarityPage.closeOverlayIfPresent()
  testingwithclarityPage.clickButton('propagate')
})

Then('I should see the same value in the three other input fields', () => {
  testingwithclarityPage.verifyTextFieldValue('input_text1', 'Hello World')
  testingwithclarityPage.verifyTextFieldValue('input_text2', 'Hello World')
  testingwithclarityPage.verifyTextFieldValue('input_text3', 'Hello World')
  testingwithclarityPage.verifyTextFieldValue('input_text4', 'Hello World')
})

When('I click on the "Clear All" button', () => {
  testingwithclarityPage.closeOverlayIfPresent()
  testingwithclarityPage.clickClearAllButton()
})

Then('I should see all the input fields empty', () => {
  testingwithclarityPage.verifyTextFieldValue('input_text1', '')
  testingwithclarityPage.verifyTextFieldValue('input_text2', '')
  testingwithclarityPage.verifyTextFieldValue('input_text3', '')
  testingwithclarityPage.verifyTextFieldValue('input_text4', '')
})

