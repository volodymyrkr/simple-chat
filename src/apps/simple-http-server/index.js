const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8080;

console.log('Server is started...');

const server = new http.Server();
server.listen(port, hostname);

server.on(
  'connection',
  connectionHandler
)
server.on(
  'request',
  httpRequestHandler
);

server.on(
  'close',
  closeHandler
);

function connectionHandler() {
  console.log('Connection is detected.');
}

function httpRequestHandler(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const method = parsedUrl.pathname;

  console.log(`Request name: ${method}`);
  console.log(parsedUrl.query);
  res.end('Hello from server');
}

function closeHandler() {
  console.log('Connection is closed.');
}
