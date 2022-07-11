const { setDefaultTimeout, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');
const process = require("process");

class CucumberConf {

  async _setup() {
    const env = this.env;
    console.log(this.env);
    await startWebDriver({ env });
    await createSession({ env });
  }

  async _shutdown() {
    await closeSession();
    await stopWebDriver();
  }

  _initEnv() {
    const env = process.env.env.trim();

    if (env === 'chrome') {
      this.env = 'default';
    } else if (env === 'firefox') {
      this.env = 'firefox';
    }
  }

  _setEvents() {
    BeforeAll(async () => this._setup());
    AfterAll(this._shutdown);
  }

  init() {
    this._initEnv();

    if (this.env) {
      setDefaultTimeout(999999999);
      this._setEvents();
    } else {
      console.log("Browser is not set. Set the 'env' environment variable to 'chrome' or 'firefox'.");
    }

  }

}

new CucumberConf().init();

