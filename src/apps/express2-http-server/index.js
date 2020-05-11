const MyLog = require('./utils/log');

const express = require('express');
const app = express();

const logger = new MyLog();
logger.log("Hello", {"data": "asdasd"});

app.use('/*', function(req, res, next){
  console.log("Hello from server");
  res.end("Server is working");
});

app.listen(3000);