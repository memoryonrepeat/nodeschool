var http = require('http');
var dataString = '';
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(input){
        dataString = dataString.concat(input);
    });
    resp.on('end', function(){

    	console.log(dataString);
    	dataString = '';

    	http.get(url2, function(resp){
    		resp.setEncoding('utf8');
    		resp.on('data', function(input){
    			dataString = dataString.concat(input);
    		});
    		resp.on('end', function(){

    			console.log(dataString);
    			dataString = '';

				http.get(url3, function(resp){
		    		resp.setEncoding('utf8');
		    		resp.on('data', function(input){
		    			dataString = dataString.concat(input);
		    		});
		    		resp.on('end', function(){

		    			console.log(dataString);
		    			dataString = '';
		    			
		    		});
		    	}).on('error', console.error);    			

    		});
    	}).on('error', console.error);

    });
}).on('error', console.error);
