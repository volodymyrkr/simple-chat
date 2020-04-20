const http = require('http');

const server = new http.Server();
server.listen(2000, 'localhost');
let emit = server.emit;

server.emit = function(event) {
  console.log(event);
  emit.apply(server, arguments);
}

let counter = 0;
server.on('request', function(req, res) {
  res.end(`Server counter ${++counter}`);
});