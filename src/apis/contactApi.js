class contactApi{
	static sendContactEmal(contact){
		new Promise((res, rej) => {
			fetch("/contact",
			{
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					method: "POST",
					body: JSON.stringify({name: contact.name, email: contact.email, comments: contact.comments, subject: contact.subject})
			})
			//returns promise
			.then(function(res){ return res.json(); })
			//gets called after promise completes
			.then(function(j){ console.log(j); })
			.catch(function(res){ console.log(res) })
		});
	}
}

export default contactApi;
