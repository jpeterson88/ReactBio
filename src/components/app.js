import React, {PropTypes} from 'react';
import LeftPanel from './leftContentPage';
import RightPanel from './rightContentPage';

class app extends React.Component{
	constructor(props){
		super(props);
		this.state = { rightPanelContext: "home" };
		this.setRightPanelContext = this.setRightPanelContext.bind(this);
	}
	
	setRightPanelContext(selectedPage){
		this.setState({
			rightPanelContext: selectedPage
		});
	}

	render(){
		return(
			<div className="stretch-it">
				<LeftPanel selectPage={this.setRightPanelContext}/>
				<RightPanel context={this.state.rightPanelContext}/>
			</div>
		);
	}
}

app.propTypes = {
	children: PropTypes.object.isRequired
};

export default app;
