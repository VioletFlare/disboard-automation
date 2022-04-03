const { setDefaultTimeout, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');

setDefaultTimeout(999999999);

BeforeAll(async () => {
  await startWebDriver();
  await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
});

