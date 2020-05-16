const log = require('../utils/log');
const Header = require('../utils/response/header');

const express = require('express');
const router = express.Router();

router.use('/', function(req, res, next) {
  console.log(`Route ${req.baseUrl} path ${req.path}`);
  next();
})

router.get('/new', function(req, res, next) {
  res.send(new Header("Magazines").getTitleInTag("h2"));
  next();
})

module.exports = router;
