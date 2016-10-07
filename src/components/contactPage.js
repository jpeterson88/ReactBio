import React from 'react';
import * as contactActions from '../actions/contactActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class contactPage extends React.Component {

	constructor(props, context){
		super(props,context);

		this.state = {
			response: null
		};

		this.onClickSubmit = this.onClickSubmit.bind(this);
	}

	onClickSubmit(){
		this.props.actions.sendContactEmail();
	}

	render(){
		return(
			<div className="container  col-lg-6 col-md-6 col-sm-6 col-xs-6">
				<h1>Contact Me</h1>
				<form name="helpForm" role="form">
				    <div className="form-group">
				      <label> Name </label>
				      <input type="text" name="name" className="form-control" required />
				    </div>

				    <div className="form-group">
				      <label>E-mail address</label>
				      <input type="email" name="email" className="form-control" required />
				    </div>

				    <div className="form-group">
				      <label>Description</label>
				      <textarea name="comments" className="form-control" required></textarea>
				    </div>
						
				    <button onClick={this.onClickSubmit} className="btn btn-default">Submit</button>
			  </form>
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


export default connect(mapStateToProps, mapDispatchToProps)(contactPage);
