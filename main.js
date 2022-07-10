const { fork } = require("child_process");
const process = require("process");
const path = require('path');

class Main {
  constructor() {
    this.cucumberProgram = path.join(process.cwd(), 'node_modules', '@cucumber', 'cucumber', 'bin', 'cucumber-js');
    this.stepsPath = path.join(process.cwd(), "steps");
    this.features = path.join(process.cwd(), "features");
  }

  _initCucumberProcessVars() {
    this.cucumberConfJs = path.join(process.cwd(), "cucumber.conf.js");

    this.args = ["--require", this.cucumberConfJs, "--require", this.stepsPath, "--", this.features];
  }

  init() {
    this._initCucumberProcessVars();
    
    fork(this.cucumberProgram, this.args);
  }
}

new Main().init();
