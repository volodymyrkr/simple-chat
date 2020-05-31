#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("supervisor ./src/apps/login2-http-server/index.js");
shell.exec("node ./src/apps/login2-http-server/index.js");