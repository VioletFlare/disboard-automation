Feature: Discordst Automation

Scenario: Discordst
    Given I go to <url>
    Then I wait for recaptcha
    When I click discordst vote
    Then I land on discordst server page

Examples:
    | url                               |
    | https://discord.st/vote/lovecafe/ |