import React, {PropTypes} from 'react';
import Header from './header';

class app extends React.Component{
	render(){
		return(
			<div className="container-fluid">
			<Header/>
					{this.props.children}
			</div>
		);
	}
}

app.propTypes = {
	children: PropTypes.object.isRequired
};


export default app;
