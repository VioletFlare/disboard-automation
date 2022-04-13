#disabled because cant view as normal user

@fdiscordhub

Feature: Discordhub Automation

Scenario: Discordhub
    Given I go to <url>
    Then I click discordhub login
    Then I click discord authorize button

Examples:
    | url                                                      |
    | https://discordhub.com/server/843401032167850004/bump    |