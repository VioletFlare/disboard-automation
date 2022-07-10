const process = require("process");
const path = require("path");
const cluster = require("cluster");

class Main {
  constructor() {
    this.cucumberProgram = path.join(
      __dirname, "node_modules", "@cucumber", "cucumber", "bin", "cucumber-js"
    );
    this.cucumberConfJs = path.join(__dirname, "cucumber.conf.js");
    this.stepsPath = path.join(__dirname, "steps");
    this.features = path.join(__dirname, "features");
    this.args = [
        "--require", this.cucumberConfJs, "--require", this.stepsPath, "--", this.features
    ];
  }

  init() {
    if (cluster.isWorker && process.env.source) {

    }

    if (cluster.isPrimary) {
      cluster.setupPrimary({
        exec: this.cucumberProgram,
        args: this.args
      });
      const worker = cluster.fork();

      worker.on("exit", async (code) => {
        console.debug(`[run] process finished with exit code`, code);
      });
    }
  }
}

new Main().init();
