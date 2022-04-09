@fdiscordservers

Feature: Discordservers Automation

Scenario: Discordservers
    Given I go to <url>
    Then I wait for recaptcha
    When I click discordst vote
    Then I land on discordst server page

Examples:
    | url                                                  |
    | https://discordservers.com/server/843401032167850004/bump |