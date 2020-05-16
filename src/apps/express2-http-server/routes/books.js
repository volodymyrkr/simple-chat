const Header = require('../utils/response/header');
const log = require('../utils/log');

const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
  // log.http(req);
  console.log(`Route ${req.baseUrl} path ${req.path}`);
  next();
});

router.get('/', function(req, res, next) {
  res.send(new Header("Books").getTitleInTag("h1"));
  next();
})

module.exports = router;