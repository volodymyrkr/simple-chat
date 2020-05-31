const express = require('express');
const bcrypt = require('bcrypt');

const server = express();

server.use(express.static(__dirname +'/public/'));
server.set('view-engine', 'ejs');

server.get('/login', (req, res, next) => {
  console.log("Connection");
  res.render(__dirname +'/views/login.ejs', { message: "Welcome!!!"});
});

server.post('/login', (req, res, next) => {
  console.log("Log");
  res.end("Logged");
});

server.get('/register', (req, res, next) => {
  res.render(__dirname +'/views/register.ejs');
});

server.post('/register', (req, res, next) => {
  res.end("Registered");
});


server.listen(3009);