var markets = require('./markets');
var port = process.env.PORT || 8080;
var io = require('socket.io').listen(port);

markets.on('data', function (data) {
	console.log(data);
  io.sockets.emit('data', data);
});