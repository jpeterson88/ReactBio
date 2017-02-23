import React from 'react';
import InterestList from './InterestList'

function interestsPage(){
var	interests = [{key: 1, value: 'Test 1'}, {key: 2, value: 'Test 2'}, {key: 3, value: 'Test 3'}];
	return(
			<div>
				<h1>My Interests</h1>
				<InterestList interests={interests} />
			</div>
		);
	}

export default interestsPage;
