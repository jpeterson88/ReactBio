import React from 'react';
import * as contactActions from '../actions/contactActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class rightContentPage extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="jumbotron stretch-it content-panel inline right-panel">
                <h1>Right Page</h1>
				<p>This is the right content page</p> 
            </div>
        );
    }
}

//map props to state after store updates
function mapStateToProps(state, ownProps){
	return{
		response: state.response
	};
}

//maps dispatch() function to props
function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(contactActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(rightContentPage);