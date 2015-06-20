var fs = require('fs');
var path = require('path');
var extension = '.'+process.argv[3];
fs.readdir(process.argv[2], function (err, files) {
	files.filter(function(filename){
		return (path.extname(filename)===extension);
	}).forEach(function(file){
		console.log(file);
	});
});