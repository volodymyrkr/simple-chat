var winston = require('winston');

module.exports = function(path= "debug.log", level = "debug") {
  return createLogger(path, level);
}

function createLogger(path, level) {
  return winston.createLogger({
    transports: [
      new winston.transports.Console({
        level: level,
      }),
      new winston.transports.File({
        filename: path,
        level: level,
      }),
    ]
  })
}