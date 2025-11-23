Feature: Conduit Login Functionality

    Scenario: Login and Logout from Conduit Application
        Given I navigate to the Conduit application
        When I login with valid credentials
        And I Click on New Post button
        And I fill up the require fields
        And I publish the article
        Then I should see the Article posted