const express = require('express');

const server = express();

server.use('/*', function(req, res, next) {
  console.log(req.baseUrl);
  next();
});

server.listen(3007);