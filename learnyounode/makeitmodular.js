var mymodule = require('./mymodule.js');
var div = process.argv[2];
var filter = process.argv[3];
mymodule(div,filter,function(err,list){
    if(err){
        throw err;
    }
    list.forEach(function(file){
    	console.log(file);
    });
    
});
