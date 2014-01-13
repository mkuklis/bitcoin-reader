var http = require('http');
var markets = require('./markets');
var port = process.env.PORT || 8080;
var server = http.createServer(function (req, res) { 
	res.writeHead(200, { 'Content-Type': 'text/html' }); 
	res.end('<p>Bitcoin Reader running</p>');
});

var io = require('socket.io').listen(server);

server.listen(port);

markets.on('data', function (data) {
  io.sockets.emit('data', data);
});