#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("supervisor ./src/apps/login-http-server/index.js");
shell.exec("node ./src/apps/login-http-server/index.js");