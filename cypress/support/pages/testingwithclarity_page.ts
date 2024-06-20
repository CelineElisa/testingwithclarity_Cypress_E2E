export class TestingwithclarityPage {
  visit():void {
    cy.visit('/');
  }

  visitWithOverlay():void {
    cy.visit('?withOverlay');
  }

  clickButton(buttonId: string):void {
    cy.get(`[id="${buttonId}"]`).click();
  }

  doubleClickButton(buttonId: string):void {
    cy.get(`[id="${buttonId}"]`).dblclick();
  }

  mouseOverButton(buttonId: string):void {
    cy.get(`[id="${buttonId}"]`).trigger('mouseover');
  }

  verifyMessage(buttonMsgId: string, expectedMessage: string):void {
    cy.get(`[id="${buttonMsgId}"]`).should('have.text', expectedMessage);
  }

  typeInTextField(textFieldId: string, text: string):void {
    cy.get(`[id="${textFieldId}"]`).type(text);
  }

  verifyTextFieldValue(textFieldId: string, expectedValue: string):void {
    cy.get(`[id="${textFieldId}"]`).should('have.value', expectedValue);
  }

  clickClearAllButton():void {
    cy.contains('button', 'Clear All').click();
  }

  closeOverlayIfPresent():void {
    cy.document().then((doc) => {
      if (doc.getElementById('overlay')) {
        cy.get('[id^="CloseOverlay"]').click();
      }
    });
  }

}