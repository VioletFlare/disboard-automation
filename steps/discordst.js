const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');

const timeout = 5000;

When(/^I click discordst vote$/, async () => {
    await client.click("[method=POST] button")
})

Then(/^I land on discordst server page$/, async () => {
    const h1Sel = ".flex.text-3xl.font-bold.flex-grow.max-w-lg";

    await client
    .waitForElementVisible(h1Sel, timeout)
})