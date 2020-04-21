const http = require('http');
const url = require('url');

const debug = require('debug')('module-name:specific-param');
const log = require('winston');
const customLogger = require('./winston')(module.filename+".log", "debug");

debug("Hello");
log.info("Hello");
log.debug("Hello");
log.error("Hello");

customLogger.info("Hello");
customLogger.debug("Hello");
customLogger.error("Hello");

const server = new http.Server();
server.listen(2000, 'localhost');
let emit = server.emit;

server.emit = function(event) {
  console.log(event);
  emit.apply(server, arguments);
}

let counter = 0;
server.on('request', function(req, res) {
  const { method } = req;
  const parsedUrl = url.parse(req.url, true)
  const pathName = parsedUrl.pathname;

  customLogger.info(`request - ${pathName}`);
  debugger;

  if (method === 'GET') {
    if (pathName === '/clean') {
      counter = 0;
    }
    else if (pathName === '/init') {
      counter = parsedUrl.query.value;
    }
    else {
      ++counter;
    }
  }

  res.end(`Hello, Server counter ${counter}`);
});
