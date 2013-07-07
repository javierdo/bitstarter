var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var buffer = new Buffer(1000);
	buffer = fs.readFileSync('index.html');
#	var content=fs.readFileSync('index.html', "utf8");
  response.send(content.toString('utf8',0,1000));

  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
