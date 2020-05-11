const winston = require('winston');

const MyLog = function() {
  console.log('Logging is initialized');
}

MyLog.prototype.log = function() {
  console.log(...arguments);
}

module.exports = MyLog;