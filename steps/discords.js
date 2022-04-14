const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');

const timeout = 5000;

Then(/^I click discords button$/, async () => {
    const loginSel = "#__next > div > div > div > div:nth-child(2) > button:not([disabled])";

    await client
        .waitForElementVisible(loginSel, timeout)
        .click(loginSel)
})

