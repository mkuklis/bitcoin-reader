var markets = require('./markets');
var io = require('socket.io').listen(8080);

markets.on('data', function (data) {
	io.sockets.emit('data', data);
});