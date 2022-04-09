const { fork } = require("child_process");
const process = require("process");
const path = require('path');

const cucumberProgram = path.join(process.cwd(), 'node_modules', '@cucumber', 'cucumber', 'bin', 'cucumber-js');
const cucumberConfJs = path.join(process.cwd(), "cucumber.conf.js");
const stepsPath = path.join(process.cwd(), "steps");
const features = path.join(process.cwd(), "features");

const args = ["--require", cucumberConfJs, "--require", stepsPath, "--", features];
fork(cucumberProgram, args);
