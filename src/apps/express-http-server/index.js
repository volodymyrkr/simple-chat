const express = require('express');
const serverApp = express();

serverApp.use(middlewareFunction);

serverApp.get('/*', rootHandler);

function middlewareFunction(req, res, next) {
  console.log(req.searchParams);
  next();
}

function rootHandler(req, res, next) {
  console.log(req.searchParams);
  res.end("Hello from server");
}

serverApp.listen(8090);