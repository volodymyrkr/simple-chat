const express = require('express');
const app = express();

app.use('/*', function(req, res, next){
  console.log("Hello from server");
  res.end("Server is working");
});

app.listen(3000);