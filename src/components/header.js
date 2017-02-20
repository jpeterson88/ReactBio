import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {connect} from 'react-redux'
import {Nav, Navbar, NavItem, MenuItem} from 'react-bootstrap'

function Header() {
	return (
		<Navbar>

			<Nav pullLeft>
				<LinkContainer to="/">
								<NavItem>Home</NavItem>
				</LinkContainer>
				<LinkContainer to="/portfolio">
								<NavItem>Portfolio</NavItem>
				</LinkContainer>
				<LinkContainer to="/interests">
								<NavItem>Interests</NavItem>
				</LinkContainer>
				<LinkContainer to="/contact">
								<NavItem >Contact</NavItem>
				</LinkContainer>
			</Nav>

		</Navbar>
	);
};

export default Header;
