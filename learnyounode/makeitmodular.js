var mymodule = require('./mymodule.js');
var div = process.argv[2];
var filter = process.argv[3];
mymodule(div,filter,function(err,list){
    if(err){
        throw err;
    }else{
        for(var i=0;i<list.length;i++){
            console.log(list[i]);
        }
    }
});
