import React from 'react';

function InterestList(props) {

const interests = props.interests.map((interest)=> {
						return <li key={interest.key}> {interest.value}</li>
					});
	return(
		<ul>
			{interests}
		</ul>
	);	
}

export default InterestList;