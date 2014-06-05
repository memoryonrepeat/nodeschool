var fs = require('fs');
var path = require('path');
var extension = '.'+process.argv[3];
fs.readdir(process.argv[2],function(err,files){
	for (var key in files){
		if (path.extname(files[key])==extension){
			console.log(files[key]);
		}
	};
});
