const express = require('express');
const urlParser = require('url');
const server = express();

server.use('/*', function(req, res, next) {
  console.log(req.baseUrl);
  next();
});

server.get('/index.html', function(req, res, next) {
  const mainHtml = require('./main-page');
  console.log(`Params: ${req.query.version}`);
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(mainHtml.generateHtml(req.query.version));
});

server.get('/bundles/*.js', function(req, res, next) {
  const bundleJs = require('./bundle-js');
  res.writeHead(200, { 'Content-type': 'text/javascript'})
  res.end(bundleJs());
});

server.listen(3007);