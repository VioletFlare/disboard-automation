Feature: Topgg Automation

Scenario: Topgg
    Given I go to <url>
    When I click topgg login
    Then I click discord authorize button

Examples:
    | url                                       |
    | https://top.gg/servers/843401032167850004 |