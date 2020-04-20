const http = require('http');
const url = require('url');

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

