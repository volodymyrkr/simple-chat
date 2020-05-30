const log = require('../../utils/log');

const express = require('express');

const server = express();
let users = [
  {name: "Vladimir", password: "123456"},
];

server.use('/*', (req, res, next) => {
  log.info(req.baseUrl);
  next();
});

server.use(express.static(__dirname + '/build/'));

server.get('/users', (req, res, next) => {
  res.json(users);
});

server.get('/add', (req, res, next) => {
  console.log(req.query)
  const result = validateAddUserRequest(req.query);
  if (result.code === 200) {
    users.push({
      name: req.query.user,
      password: req.query.pass,
    });
  }
  res.writeHead(200, {"Content-type": "text.html"});
  res.end(JSON.stringify({
      ...result,
      ...req.query,
    }
  ));
});

function validateAddUserRequest(query) {
  if (!query.user) {
    return {
      code: 401,
      message: "user name is missed"
    }; // no username
  }
  if (!query.pass) {
    return {
      code: 402,
      message: "password name is missed"
    }; // no pass
  }
  if (userRegistered(query.user)) {
    return {
      code: 403,
      message: "user is registered"
    }; // user registered
  }
  return {
    code: 200,
    message: "user is added"
  };
}

function userRegistered(userName) {
  return users.some(({name}) => name === userName);
}
server.get('/clear', (req, res,  next) => {
  users = [];
  res.end(
    JSON.stringify({
      code: 200
    })
  )
});

server.listen(3008);