var express = require('express');
var path = require('path');
var app = express();

// Redirect all static files to public/
app.use('/static', express.static(path.join(__dirname, 'public')));

var homePath = path.join(__dirname, 'public','html','index.html');
app.get('/', function (req, res) {
  res.sendFile(homePath);
});

var notFoundPath = path.join(__dirname, 'public','html','404.html');
app.all('*', function (req, res) {
  res.sendFile(notFoundPath);
});

var port = process.env.APP_PORT ? process.env.APP_PORT : '8080';
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
