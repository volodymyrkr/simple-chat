const log = require('../../utils/log');

const express = require('express');

const server = express();
const users = [
  {name: "Vladimir", password: "123456"},
];

server.use('/*', (req, res, next) => {
  log.info(req.baseUrl);
  next();
});

server.use('/static', express.static(__dirname + '/build'));

server.get('/users', (req, res, next) => {
  res.json(users);
});

server.get('/add', (req, res, next) => {
  console.log(req.query)
  users.push({
    name: req.query.user,
    password: 'nopass'
  })
  res.writeHead(200, {"Content-type": "text.html"});
  res.end(JSON.stringify({
      result: 200,
      ...req.query,
      ...users,
  }
  ));
});

server.listen(3008);