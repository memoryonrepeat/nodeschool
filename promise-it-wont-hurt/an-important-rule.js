function alwaysThrows(){
	throw Error('OH NOES')
}

function iterate(arg){
	arg = arg || 1
	console.log(arg)
	return arg+1
}

Promise.resolve().then(iterate).then(iterate).then(iterate).then(iterate).then(iterate)
.then(alwaysThrows).then(iterate).then(iterate).then(iterate).then(iterate).then(iterate)
.then(null, (e)=>console.log(e.message))