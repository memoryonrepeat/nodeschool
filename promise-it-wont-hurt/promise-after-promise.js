/*
first().then((secret) => {
	return second(secret)
}).then(console.log)
*/

first().then(second).then(console.log)