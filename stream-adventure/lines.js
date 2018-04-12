let split = require('split')
let through2 = require('through2')
let flag = true
process.stdin.pipe(split()).pipe(through2(function(line, encoding, next){
	if (flag){
		// this.push(flag.toString())
		this.push(line.toString().toLowerCase()+'\n')
	}
	else{
		// this.push(flag.toString())
		this.push(line.toString().toUpperCase()+'\n')
	}
	flag = !flag
	next()
})).pipe(process.stdout)