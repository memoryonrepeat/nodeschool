function parsePromised(param){
	return new Promise(function(fullfill, reject){
		try{
			fullfill(JSON.parse(param))
		}
		catch(e){
			reject(e)
		}
	})
}

parsePromised(process.argv[2]).then(null, (e) => console.log(e.message))