const through = require('through2')
let throughStream = through(write, end)

function write(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase())
	next()
}

// Optional
function end(done){
	done()
}

process.stdin.pipe(throughStream).pipe(process.stdout)