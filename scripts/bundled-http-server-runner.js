#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("supervisor ./src/apps/bundled-http-server/index.js");
shell.exec("node ./src/apps/bundled-http-server/index.js");