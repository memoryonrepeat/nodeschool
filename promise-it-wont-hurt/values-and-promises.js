function attachTitle(msg) {
	return 'DR. '+msg;
}

var promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log)