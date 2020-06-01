const express = require('express');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

const server = express();
const users = [
  {name: 'asd', pass: 'asd', email: ""},
  {name: 'qwe', pass: 'qwe', email: ""}
]

server.use(cookieSession({
  name: 'session',
  keys: ['secret'],
  maxAge: 30000,
  expires: Date.now() + (1 * 3 * 1000)
}));

server.use(express.static(__dirname +'/public/'));
server.use(express.urlencoded({extended: false}));
server.set('view-engine', 'ejs');

server.get('/login', (req, res, next) => {
  console.log(req.session);
  res.render(__dirname +'/views/login.ejs', { message: `Welcome!!! ${req.session.user}`});
});

server.post('/login', (req, res, next) => {
  console.log(JSON.stringify(req.body));
  if (!validateUser(req.body)) {
    res.redirect("/login");
  }
  req.session.user = req.body.user;
  res.redirect("/welcome");
});

server.get('/welcome', (req, res, next) => {
  res.cookie("user", req.session.user, {maxAge: 10000});
  res.render(__dirname +'/views/welcome.ejs', {
    user: req.session.user
  })
});

server.get('/logout', (req, res, next) => {
  req.session.user = null;
  res.render(__dirname +'/views/welcome.ejs', {
    user: req.session.user
  });
});

function validateUser(data) {
  return users.some((user) => user.name === data.user && user.pass === data.pass);
}

function addUser(data) {
  if (!validateUser(data)) {
    users.push({
      name: data.user,
      pass: data.pass,
      email: data.email,
    });
  }
  return users.find(user => user.name === data.user);
}

server.get('/register', (req, res, next) => {
  res.render(__dirname +'/views/register.ejs');
});

server.post('/register', (req, res, next) => {
  const addedUser = addUser(req.body);
  if (!!addedUser) {
    req.session = {
      user: addedUser.name
    };
    // console.log(`Registered as ${JSON.stringify(req.session)}`);
    // res.end(`Registered as ${JSON.stringify(req.session)}`);
    res.render(__dirname + '/views/welcome.ejs', {
      user: req.session.user
    })
  }
});


server.listen(3009);