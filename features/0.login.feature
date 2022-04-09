@flogin

Feature: Discord Login

Scenario: Login
    Given I go to <url>
    Then I insert credentials and submit
    Then I land on my dashboard

Examples:
    | url                       |
    | https://discord.com/login |