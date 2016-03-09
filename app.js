var express = require('express');
var app = express();

app.get('/echo/:message', function (request, response) {
  var message = request.params.message;
  response.send(message);
});

app.listen(55000, function () {
  console.log('Example app listening on port 55000!');
});
