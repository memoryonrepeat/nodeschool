var net = require('net');
var port = process.argv[2];
var strftime = require('strftime');
var server = net.createServer(function(socket){
	socket.end(strftime('%F %R'));
});
server.listen(port);