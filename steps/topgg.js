const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');

const timeout = 5000;
const isChrome = process.env.env === 'chrome';

Then(/^I click topgg cookie policy accept$/,  async () => {
    const cookiePolicyIframe = "[id*=sp_message_container] iframe";
    const cookiePolicyAccept = "#notice > div.message-component.message-row.bottom-row > button:nth-child(2)";

    await client
    .waitForElementVisible(cookiePolicyIframe, timeout, false) //false -> doesn't abort the test if el not present
    .element('css selector', cookiePolicyIframe, (frame) => {
        if (isChrome) {
            client.frame({ELEMENT: frame.value.ELEMENT}, () => {
                client.waitForElementVisible(cookiePolicyAccept, 1000, false)
                .click(cookiePolicyAccept);
            });
        } else {
            client.frame(frame.value, () => {
                client.waitForElementVisible(cookiePolicyAccept, timeout, false)
                .click(cookiePolicyAccept);
            });
        }

    })
    .frame(null);
})

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
        .waitForElementVisible(voteButtonSel, 6000000)
        .click(voteButtonSel);
})