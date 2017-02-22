import React, {PropTypes} from 'react';
import Header from './header';
import LeftContent from './leftContentPage';
import RightContent from './rightContentPage';
import {Grid,Row, Col} from 'react-bootstrap'

class app extends React.Component{
	render(){
		return(
			/*<Grid className="stretch-it no-spacing">
				<Row className="stretch-it no-spacing">

					<Col className="left-panel stretch-it no-spacing">
						<LeftContent/>
					</Col>
					<Col className="right-panel stretch-it no-spacing">
						<RightContent />
					</Col>					
				</Row>
			</Grid>*/
			<div className="stretch-it">
				<LeftContent/>
				<RightContent/>
			</div>
		);
	}
}

app.propTypes = {
	children: PropTypes.object.isRequired
};


export default app;
