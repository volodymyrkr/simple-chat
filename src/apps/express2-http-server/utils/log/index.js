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

// Available log levels
// for cli and npm levels
// error,warn,help,data,info,debug,prompt,http,verbose,input,silly: LeveledLogMethod;

// for syslog levels only
// emerg,alert,crit,warning,notice: LeveledLogMethod;

function parseArguments(data) { // Winston doesn't handle list of arguments
  let result = [...arguments].map(function (item) {
    return `${JSON.stringify(item)}`;
  }).reduce((result, item) => `${result} ${item}`);
  return result;
}

function debug() {
  logger.debug(parseArguments(...arguments));
}

function info() {
  logger.info(JSON.stringify(arguments));
}

function http() {
  logger.http(JSON.stringify(arguments));
}

module.exports = {
  debug: debug,
  info: info,
  http: http,
}