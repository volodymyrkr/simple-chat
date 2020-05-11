const logger = require('./utils/log');

const express = require('express');
const app = express();

logger.debug("server", {"data": "asdasd"});

app.use('/*', function(req, res, next){
  console.log("Hello from server");
  res.end("Server is working");
});

app.listen(3000);