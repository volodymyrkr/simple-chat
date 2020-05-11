const express = require('express');
const serverApp = express();

serverApp.use(middlewareFunction);

serverApp.get('/*', rootHandler);

function middlewareFunction(req, res, next) {
  console.log(req);
  next();
}

function rootHandler(req, res, next) {
  console.log(req);
  res.end("Hello from server");
}

serverApp.listen(8092);