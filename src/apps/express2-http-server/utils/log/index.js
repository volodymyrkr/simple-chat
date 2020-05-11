const winston = require('winston');

function log() {
  console.log(...arguments);
}

function info() {
  console.info(...arguments);
}

module.exports = {
  log: log,
  info: info,
}