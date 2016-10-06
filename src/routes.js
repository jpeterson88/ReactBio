import React from 'react';
import {Route, IndexRoute} from 'react-router';
import app from './components/app';
import aboutPage from './components/aboutPage';
import homePage from './components/homePage';
import contactPage from './components/contactPage';


export default(
	<Route path="/" component={app}>
		<IndexRoute component={homePage}/>
		<Route path="/about" component={aboutPage}/>
		<Route path="/contact" component={contactPage}/>
	</Route>
);
