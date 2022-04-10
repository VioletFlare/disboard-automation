#Disabled because protected by cloudflare

@fdiscordbotlist

Feature: Discordbotlist Automation

Scenario: Discordbotlist Upvote
    Then I set discordbotlist cloudflare headers
    Given I go to <url>
    Then I click discordbotlist upvote
    Then I click discord authorize button
    Then I wait 50 s

Examples:
    | url                                                      |
    | https://discordbotlist.com/servers/love-cafe-8542/upvote |