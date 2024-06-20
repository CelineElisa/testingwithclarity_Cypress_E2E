Feature: testingwithclarity web page functionalities

Scenario: The user clicks on the button "Button Click" and sees the message
    Given I am on the "testingwithclarity" page
    When I click on the "Button Click" button
    Then I should see the message "Click Done"

Scenario: The user double clicks on the button "Button DblClick" and sees the message
    Given I am on the "testingwithclarity" page
    When I click on the "Button DblClick" button
    Then I should see the message "DblClick Done"

Scenario: The user hovers the mouse over the button "Button MouseOver" and sees the message
    Given I am on the "testingwithclarity" page
    When I move the mouse over the "Button MouseOver" button
    Then I should see the message "MouseOver Done"

Scenario: The user plays with the text inputs objects
    Given I am on the "testingwithclarity" page with an overlay
    When I insert a value in the "Input 1" text field
    When I click on the "Propagate" button
    Then I should see the same value in the three other input fields
    When I click on the "Clear All" button
    Then I should see all the input fields empty
