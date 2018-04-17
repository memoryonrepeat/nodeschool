function all(p1, p2){
	return new Promise((fulfill, reject) => {
		var counter = 0
		var array = []
		p1.then((result) => {
			counter++

			// explicitly assigning instead of using array.push to match the test.
			// the promises are running in parallel indeed
			array[0] = result
			if (counter==2){
				fulfill(array)
			}
		})
		p2.then((result) => {
			counter++
			array[1] = result
			if (counter==2){
				fulfill(array)
			}
		})
	})
}

all(getPromise1(), getPromise2()).then(console.log)