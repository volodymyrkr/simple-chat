const http = require('http');

const server = new http.Server();
server.listen(2000, 'localhost');

let counter = 0;
server.on('request', function(req, res) {
  res.end(`Server counter ${++counter}`);
});