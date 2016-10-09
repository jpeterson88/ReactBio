import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () =>{
	return (
		<nav>
				<IndexLink to="/" activeClassName="active">Home</IndexLink>
					{" | "}
					<Link to="/portfolio" activeClassName="active">Portfolio</Link>
					{" | "}
					<Link to="/interests" activeClassName="active">Interests</Link>
					{" | "}
					<Link to="/contact" activeClassName="active">Contact</Link>
		</nav>
	);
};

export default Header;
