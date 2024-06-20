Feature: Technical test

Scenario: 1
    Given I am on the "testingwithclarity" page
    When I click on the "Button Click" button
    Then I should see the message "Click Done"

Scenario: 2
    Given I am on the "testingwithclarity" page
    When I click on the "Button DblClick" button
    Then I should see the message "DblClick Done"

Scenario: 3
    Given I am on the "testingwithclarity" page
    When I move the mouse over the "Button MouseOver" button
    Then I should see the message "MouseOver Done"

Scenario: 4
    Given I am on the "testingwithclarity" page with an overlay
    When I insert a value in the "Input 1" text field
    When I click on the "Propagate" button
    Then I should see the same value in the three other input fields
    When I click on the "Clear All" button
    Then I should see all the input fields empty
