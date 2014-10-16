http = require('http');
concat = require('concat-stream');
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

/*http.get(url, function(response) {
    response.pipe(concat(function(data) {        
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
});*/
