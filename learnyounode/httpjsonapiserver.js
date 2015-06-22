var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(request, response){
	if (request.method !== 'GET'){
		return response.end('Only GET request is accepted');
	}
	
	var reqObj = url.parse(request.url, true);
	var dateObj = new Date(reqObj.query.iso);
	var resObj = {};

	if (reqObj.pathname === '/api/parsetime'){
		resObj = {
			hour: dateObj.getHours(),
			minute: dateObj.getMinutes(),
			second: dateObj.getSeconds()
		};
	}
	else if (reqObj.pathname === '/api/unixtime'){
		resObj = {
			unixtime: dateObj.getTime()
		}
	}

	if (Object.keys(resObj).length === 0){
		response.writeHead(404);
		response.end();
	}

	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end(JSON.stringify(resObj));

});

server.listen(port);