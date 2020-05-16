const logger = require('./utils/log');
const booksRouter = require('./routes/books');
const magazinesRouter = require('./routes/magazines');

const express = require('express');
const app = express();

logger.debug("Server is started");

app.use(function(req, res, next){
  logger.info("Connection is detected");
  next();
});

app.use('/books', booksRouter);
app.use('/magazines', magazinesRouter);

app.get("/", function(req, res, next) {
  logger.info("Handler 1");
  next();
});

app.get("/*", function(req, res, next) {
  logger.info("Handler 2");
  res.end();
});

app.listen(3000);