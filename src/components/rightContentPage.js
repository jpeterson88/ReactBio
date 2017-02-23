import React from 'react';
import Interest from './interestsPage';
import Portfolio from './portfolioPage';
import Home from './homePage';
// import Contact from './contactPage';

function rightContentPage (props){
var renderElement = null;

    switch(props.context){
        case 'home':
            renderElement = <Home/>
            break
        case 'portfolio':
            renderElement = <Portfolio/>
            break
        // case 'contact':
        //     renderElement = <Contact/>
        //     break
        case 'interest':
            renderElement = <Interest/>
            break
        default:
            renderElement = <Home/>
    }


    return(
        <div className="jumbotron stretch-it content-panel inline right-panel" id="rightPanel">
            {props.rightPanelContext}
        </div>
    );
}

export default rightContentPage;