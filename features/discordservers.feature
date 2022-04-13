@fdiscordservers

Feature: Discordservers Automation

Scenario: Discordservers Authentication
    Given I go to <url>
    When I click discordservers login
    Then I click discordservers give gems
    
Examples:
    | url                                                       |
    | https://discordservers.com/server/843401032167850004/bump |