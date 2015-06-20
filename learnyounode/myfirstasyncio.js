var fs = require('fs');
var buffer = fs.readFile(process.argv[2],'utf8',function(err,data){
	if (err) throw err;
	substr = data.split('\n');
	console.log(substr.length-1);
});
