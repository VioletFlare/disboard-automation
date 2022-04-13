const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');

const timeout = 60000000;

Then(/^I click discordhub login$/, async () => {
    const loginSel = ".login div > div > [href*='/login']";

    await client
        .waitForElementVisible(loginSel, timeout)
        .click(loginSel)
})