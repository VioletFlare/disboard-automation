const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');

const timeout = 60000000;

When(/^I click topgg login$/, async () => {
    const loginButtonSel = "a[href*='/login?']";

    await client.click(loginButtonSel);
})

When(/^I click topgg vote$/, async () => {
    const voteButtonSel = 
        "div > div > div.chakra-container > div > section > div > div > div > a";

    await client.click(voteButtonSel);
})
