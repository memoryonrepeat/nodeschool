http = require('http');
//concat = require('concat-stream');
bl = require('bl');
url = process.argv[2];

http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        if (err) throw err;
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
});

/* 
// Using bl
http.get(url, function(response) {
    response.pipe(concat(function(data) {        
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
});
*/

/*
// Concatenate manually
http.get(url, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(input){
        dataString = dataString.concat(input);
    });
    resp.on('end', function(){
        console.log(dataString.length);
        console.log(dataString);
    });
}).on('error', console.error);
*/
