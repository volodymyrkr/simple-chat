#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("supervisor ./src/apps/express-http-server/index.js");
shell.exec("node ./src/apps/express-http-server/index.js");
