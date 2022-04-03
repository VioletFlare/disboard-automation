const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');

const timeout = 60000000;

Given(/^I go to ([^"]*)$/, async (url) => {
    await client
        .url(url)
        .waitForElementVisible('body', timeout);
});

Then(/^I wait ([^"]*) s$/, async (s) => {
    const ms = s * 1000;

    await client.pause(ms);
})

Then(/^I wait for recaptcha$/, async () => {
    await client
    .waitForElementVisible(".g-recaptcha iframe", timeout)
    .element('css selector', '.g-recaptcha iframe', (frame) => {
        client.frame({ELEMENT: frame.value.ELEMENT}, () => {
            client.waitForElementPresent(".recaptcha-checkbox-checked", timeout)
        });
    })
    .frame(null);
})

Then(/^I click discord authorize button$/, async () => {
    const authorizeButtonSel = 
        "[class*='authorize-'] button:nth-child(2)";

    await client
        .waitForElementVisible(authorizeButtonSel, timeout)
        .click(authorizeButtonSel);
})