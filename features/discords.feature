@fdiscords

Feature: Discords Automation

Scenario: Discords
    Given I go to <url>
    Then I click discords button
    Then I click discord authorize button
    Then I go to <url>
    Then I click discords button

Examples:
    | url                                                      |
    | https://discords.com/servers/843401032167850004/upvote   |