var fs = require('fs');
var path = require('path');
module.exports = function(dir,filter,callback){    
    var files = [];
    filter = '.'+filter;
    fs.readdir(dir,function(err,list){
       if(err) return callback(err);
	    for(var i=0;i<list.length;i++){
	        if(path.extname(list[i])==filter){
	            files.push(list[i]);
	        }
	    }
        return callback(null,files);
    });
}
