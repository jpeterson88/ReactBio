class contactApi{
	static sendContactEmal(){
		debugger;
		//logic for sending email to node here
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
			.then(function(res){debugger; console.log(res) })
			.catch(function(res){debugger; console.log(res) })
		});
	}
}

export default contactApi;
