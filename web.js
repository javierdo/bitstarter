var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var buffer = new Buffer(16);
	buffer = fs.readFileSync('index.html');
  response.send(buf.toString('utf8',0,16));
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});