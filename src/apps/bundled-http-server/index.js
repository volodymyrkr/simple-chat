const express = require('express');
const urlParser = require('url');
const server = express();

server.use('/*', function(req, res, next) {
  console.log(req.baseUrl);
  next();
});

server.get('/index.html', function(req, res, next) {
  const mainHtml = require('./main-page');

  console.log(req.route.query);
  res.end(mainHtml.generateHtml());
});

server.listen(3007);