const express = require('express');

const server = express();

server.use(express.static(__dirname +'/public/'));

server.get('/', (req, res, next) => {
  console.log('connection');
})

server.listen(3009)