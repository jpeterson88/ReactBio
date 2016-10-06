import React from 'react';

class contactPage extends React.Component {
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

				    // <div className="form-group">
				    //   <label>Inquiry Reason</label>
				    //   <select name="subjectList" className="form-control" required>
				    //   </select>
				    // </div>

				    <div className="form-group">
				      <label>Description</label>
				      <textarea name="comments" className="form-control" required></textarea>
				    </div>

				    <button className="btn btn-default">Submit</button>
			  </form>
			</div>
		);
	}
}

export default contactPage;
