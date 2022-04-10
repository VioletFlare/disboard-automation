@ftopgg

Feature: Topgg Automation

Scenario: Topgg
    Given I go to <url>
    When I click topgg login
    Then I click discord authorize button
    Then I land on topgg page
    Then I click on topgg prevote
    #Then I go to <vote_url>
    Then I click topgg vote

Examples:
    | url                                       | vote_url                                       |
    | https://top.gg/servers/843401032167850004 | https://top.gg/servers/843401032167850004/vote |