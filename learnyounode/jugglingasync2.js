const http = require('http');
var dataString = '';
var urlCount = 3;

fetch(0)

function fetch(i){
	if (i==urlCount){
		return
	}
	http.get(process.argv[i+2], function(res){
		res.setEncoding('utf8')
		res.on('data', function(data){
			dataString = dataString.concat(data)
		})
		res.on('end', function(){
			console.log(dataString)
			dataString = ''
			fetch(i+1)
		})
	}).on('error', console.error)
}