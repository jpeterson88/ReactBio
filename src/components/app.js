import React, {PropTypes} from 'react';
import LeftPanel from './leftContentPage';
import RightPanel from './rightContentPage';

class app extends React.Component{
	constructor(){
		super();
		this.state = { rightPanelContext: "home" };			
		this.handleRightPanelSelection = this.handleRightPanelSelection.bind(this);
	}

	handleRightPanelSelection(selectedPage){		
		this.setState({
			rightPanelContext: selectedPage
		});
	}

	render(){		
		return(
			<div className="stretch-it">
				<div className="jumbotron stretch-it content-panel inline left-panel">
					<LeftPanel setPageContext={(i) => this.handleRightPanelSelection(i)}/>
				</div>			
				<div className="jumbotron stretch-it content-panel inline right-panel">
					<RightPanel context={this.state.rightPanelContext }  className="jumbotron stretch-it content-panel inline right-panel"/>
				</div>				
			</div>
		);
	}
}

app.propTypes = {
	children: PropTypes.object.isRequired
};

export default app;
