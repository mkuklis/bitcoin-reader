var markets = require('./markets');
var io = require('socket.io').listen(80);

markets.on('data', function (data) {
	console.log(data);
  io.sockets.emit('data', data);
});