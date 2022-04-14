//Need to make it work with cloudflare some way

const { Given, Then, When } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');
//const Nightwatch = require('nightwatch');
/*
const client2 = Nightwatch.createClient({
    headless: true,
    output: true,
    silent: true, // set to false to enable verbose logging
    browserName: 'firefox', // can be either: firefox, chrome, safari, or edge
  
    // set the global timeout to be used with waitFor commands and when retrying assertions/expects
    timeout: 10000,
  
    // set the current test environment from the nightwatch config
    env: null,
  
    // any additional capabilities needed
    desiredCapabilities: {
  
    },
  
    // can define/overwrite test globals here; 
    // when using a third-party test runner only the global hooks onBrowserNavigate/onBrowserQuit are supported
    globals: {},
  
    // when the test runner used supports running tests in parallel; 
    // set to true if you need the webdriver port to be randomly generated
    parallel: false, 
  
    // All other Nightwatch config settings can be overwritten here, such as:
    disable_colors: false
});
*/
const timeout = 5000;

Then(/^I set discordbotlist cloudflare headers$/, async () => {
    const browser = await client.launchBrowser();

    await browser.chrome.sendDevToolsCommand('Network.enable')
    await browser.chrome.sendDevToolsCommand('Network.setExtraHTTPHeaders',
        {
            headers:
            {
                cookie: "cf_clearance=g1FScgeqsC5M9uweeP27O2TrYaIEfhiOkshqqpCZ1OY-1649607360-0-150; amp_fef1e8=d150c924-e1f6-40e5-98a4-2cb58a1f717dR...1g0a7ebg2.1g0a7ebg4.1.0.1; cf_chl_2=5d0fad60c786e13; cf_chl_prog=x12"
            }
        })
})

Then(/^I click discordbotlist upvote$/, async () => {
    const upvoteButton = "#__layout > div > div > div > div > button";

    await client
        .waitForElementVisible(upvoteButton, timeout)
        .click(upvoteButton)
})