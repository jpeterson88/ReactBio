import React from 'react';
import {Route, IndexRoute} from 'react-router';
import app from './components/app';
import portfolioPage from './components/portfolioPage';
import interestsPage from './components/interestsPage';
import homePage from './components/homePage';
import contactPage from './components/contactPage';


export default(
	<Route path="/" component={app}>
		<IndexRoute component={homePage}/>
		<Route path="/portfolio" component={portfolioPage}/>
		<Route path="/interests" component={interestsPage}/>
		<Route path="/contact" component={contactPage}/>
	</Route>
);
