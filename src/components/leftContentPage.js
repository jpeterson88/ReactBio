import React from 'react';
import * as contactActions from '../actions/contactActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './header';

function leftContentPage(props){
    return(
        <div className="jumbotron stretch-it content-panel inline left-panel" id="leftPanel">                                
            <h1>Left Page</h1>
            <p>This is the left content page</p>
            <button onClick={props.selectPage("interest")}>Interests</button>
            <button onClick={props.selectPage("home")}>Home</button>
            <button onClick={props.selectPage("portfolio")}>Portfolio</button>       
        </div>
    );
}

export default leftContentPage;