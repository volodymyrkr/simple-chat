const Header = require('../utils/response/header');

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send(new Header("Books").getTitleInTag("h1"));
  next();
})