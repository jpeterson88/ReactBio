import React from 'react';
import Interest from './interestsPage';
import Portfolio from './portfolioPage';
import Home from './homePage';
// import Contact from './contactPage';

function rightContentPage (props){

var dict = {
  "home": <Home/>,
  "portfolio": <Portfolio/>,
  "interest": <Interest/>
};

var renderElement = dict[props.context];

    return(
        <div>
            {renderElement}
        </div>
    );
}

export default rightContentPage;