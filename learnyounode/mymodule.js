var fs = require('fs');
var path = require('path');
module.exports = function(dir,filter,callback){    
    var files = [];
    filter = '.'+filter;
    fs.readdir(dir,function(err,list){
       	if(err){
       		return callback(err);
       	}
       	list = list.filter(function(file){
       		return (path.extname(file)===filter);
       	});
        return callback(null,list);
    });
}
