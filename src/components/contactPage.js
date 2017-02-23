import React from 'react';
import * as contactActions from '../actions/contactActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

class contactPage extends React.Component {

	constructor(props, context){
		super(props,context);

		this.state = {
			response: undefined,
			comments: '',
			name: '',
			email: '',
			subject: 'Inquiries'
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
	}

handleSubmit(e){
		e.preventDefault();
		this.props.actions.sendContactEmail(
			{
			  "name" : this.state.name,
				"email" : this.state.email,
				"comments" : this.state.comments,
				"subject" : this.state.subject
			}
		);
	}
	handleFormChange(event) {
	    	this.setState({[event.target.name]: event.target.value}, function (){
			});
	  }

		handleDropdownSelect(subjectValue){
			this.setState({['subject']: subjectValue}, function (){
			});
			}


	render(){
		return(
			<div>
				<h1>Contact Me</h1>
				<form name="helpForm" role="form" onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
				    <div className="form-group">
				      <label> Name </label>
				      <input type="text" name="name" className="form-control"  required/>
				    </div>

				    <div className="form-group">
				      <label>E-mail address</label>
				      <input type="email" name="email" className="form-control" required />
				    </div>

						<div className="form-group">
							<label>Subject</label>
							<div>
								<DropdownButton title={this.state.subject} id="bg-nested-dropdown" onSelect={this.handleDropdownSelect}>
									<MenuItem eventKey="General">General</MenuItem>
									<MenuItem eventKey="Professional">Professional</MenuItem>
									<MenuItem eventKey="Bug">Report Bug</MenuItem>
								</DropdownButton>
							</div>
						</div>

				    <div className="form-group">
				      <label>Description</label>
				      <textarea name="comments" className="form-control" required></textarea>
				    </div>
						<button type="submit" className="btn btn-primary">Post</button>
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
