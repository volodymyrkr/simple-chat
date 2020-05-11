var appRoot = require('app-root-path');

const winston = require('winston');
const { format, transports } = winston;

var options = {
  file: {
    level: 'info',
    name: 'file.info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: true,
  },
  errorFile: {
    level: 'error',
    name: 'file.error',
    filename: `${appRoot}/logs/error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: true,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: format.combine(
      // Render in one line in your log file.
      // If you use prettyPrint() here it will be really
      // difficult to exploit your logs files afterwards.
      format.simple()
    )
  },
};

let logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)(options.console),
    new (winston.transports.File)(options.errorFile),
    new (winston.transports.File)(options.file)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

function debug() {
  logger.log('debug', ...arguments);
}

function info() {
  logger.info('info', ...arguments);
}

module.exports = {
  debug: debug,
  info: info,
}