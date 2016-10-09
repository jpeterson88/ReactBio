class contactApi{
	static sendContactEmal(){
		new Promise((res, rej) => {
			fetch("/test",
			{
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					method: "POST",
					body: JSON.stringify({a: 1, b: 2})
			})
			//returns promise
			.then(function(res){ return res.json(); })
			//gets called after promise completes
			.then(function(j){ debugger; console.log(j); })
			.catch(function(res){debugger; console.log(res) })
		});
	}
}

export default contactApi;
