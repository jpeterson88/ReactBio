import React from 'react';
import * as contactActions from '../actions/contactActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class contactPage extends React.Component {

	constructor(props, context){
		super(props,context);

		this.state = {
			response: undefined,
			comments: '',
			name: '',
			email: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
	handleChange(event) {
	    	this.setState({[event.target.name]: event.target.value}, function (){
			});
	  }

	render(){
		return(
			<div className="container  col-lg-6 col-md-6 col-sm-6 col-xs-6">
				<h1>Contact Me</h1>
				<form name="helpForm" role="form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
				    <div className="form-group">
				      <label> Name </label>
				      <input type="text" name="name" className="form-control"  required/>
				    </div>

				    <div className="form-group">
				      <label>E-mail address</label>
				      <input type="email" name="email" className="form-control" required />
				    </div>

						<ul className="dropdown-menu" name="subject" aria-labelledby="dropdownMenu2">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li><a href="#">Separated link</a></li>
						</ul>

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
