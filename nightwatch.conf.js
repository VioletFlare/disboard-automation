const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');

module.exports = {
  src_folders: ["steps"],
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromeDriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          "args": [
            "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.79 Safari/537.36",
          ]
        }
      }
    },
    firefox: {
      webdriver: {
        server_path: geckoDriver.path
      },
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          'moz:firefoxOptions': {
            prefs: {
              'general.useragent.override': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.79 Safari/537.36',
            },
          },
        },
        marionette: true
      }
    }
  }
};