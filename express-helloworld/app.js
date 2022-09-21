var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
app.get('/mamik', function (req, res) {
  res.send('Hey Babe\n');
});
app.get('/cuz', function (req, res) {
  res.send('Waddup Bro\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

