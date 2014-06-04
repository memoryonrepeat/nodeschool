var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var content = buffer.toString();
var substr = content.split("\n");

console.log(substr.length-1);
