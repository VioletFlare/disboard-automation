const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');

const timeout = 5000;

When(/^I click discordservers login$/, async () => {
    const loginButtonSel = "section > div > div > div > div > button";

    await client
        .waitForElementVisible(loginButtonSel, timeout)
        .click(loginButtonSel);
})

Then(/^I click discordservers give gems$/, async () => {
    const giveGeemsButtonSel = "section > div > div > div > div > button:not([disabled])";

    await client
        .waitForElementVisible(giveGeemsButtonSel, timeout)
        .click(giveGeemsButtonSel)
})
