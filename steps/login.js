const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');
const credentials = require('../credentials.config');

const timeout = 60000000;

Then(/^I insert credentials and submit$/, async () => {
    const formSel = "[class*='authBoxExpanded-']";
    const formEmail = formSel + " [name=email]";
    const formPassword = formSel + " [name=password]";
    const submitButton = formSel + " [type=submit]";

    await client
        .waitForElementVisible(formSel, timeout)
        .setValue(formEmail, credentials.email)
        .setValue(formPassword, credentials.password)
        .click(submitButton);
});

Then(/^I land on my dashboard$/, async () => {
    const privChannelsTab = "[class*=privateChannels-]";

    await client
        .waitForElementVisible(privChannelsTab, timeout);
})