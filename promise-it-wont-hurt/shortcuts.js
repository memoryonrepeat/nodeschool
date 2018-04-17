var promise1 = Promise.resolve('Equals to fullfill callback')
var promise2 = Promise.reject(Error('Equals to reject callback'))
promise2.catch((err) => {
	console.log(err.message)
})