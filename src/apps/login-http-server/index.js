const log = require('../../utils/log');

const express = require('express');

const server = express();

server.use('/*', (req, res, next) => {
  log.info(req.baseUrl);
  next();
});

server.get('/*', (req, res, next) => {
  res.end(`${req.baseUrl}`);
});

server.listen(3008);