const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');

const timeout = 60000000;

When(/^I click topgg login$/, async () => {
    const loginButtonSel = "a[href*='/login?']";

    await client.click(loginButtonSel);
})

Then(/^I land on topgg page$/, async () => {
    const banner = 
        "[class*='StyleProvider'] img";

    await client.waitForElementVisible(banner, timeout);
})

Then (/^I click on topgg prevote$/, async () => {
    const prevoteButtonSel = 
        "div > div.chakra-container > div > section > div > div > div > div > div > div > a"

    await client
        .waitForElementVisible(prevoteButtonSel, timeout)
        .click(prevoteButtonSel);
})

Then(/^I click topgg vote$/, async () => {
    const voteButtonSel = 
        "div > div > div > div.chakra-container > div > div > div > div > div > div > main > div > div > div > button:not([disabled])";

    await client
        .waitForElementVisible(voteButtonSel, timeout)
        .click(voteButtonSel);
})