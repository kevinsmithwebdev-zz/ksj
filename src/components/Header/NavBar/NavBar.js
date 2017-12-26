import React from 'react'

import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

import './NavBar.css'

import { Link, NavLink, withRouter } from 'react-router-dom'
class NavBar extends React.Component {
  render() {
    let { history, location, match } = this.props
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <span className="nav-brand-word">kevin</span>
            <span className="nav-brand-word">smith</span>
            <span className="nav-brand-word">guitar</span>
            <span className="nav-brand-word">.com</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer exact={true} to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer exact={true} to="/bio">
              <NavItem>Bio</NavItem>
            </LinkContainer>
            <LinkContainer exact={true} to="/media">
              <NavItem>Media</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withRouter(NavBar)

//
// <ul>
//   <li>
//     <NavLink className="my-nav-link" to="/">
//       Home
//     </NavLink>
//   </li>
//   <li>
//     <NavLink className="my-nav-link" to="/bio">
//       Bio
//     </NavLink>
//   </li>
//   <li>
//     <NavLink className="my-nav-link" to="/media">
//       Media
//     </NavLink>
//   </li>
// </ul>

/* <NavItem eventKey={1} href="#">
  Home
</NavItem>
<NavItem eventKey={2} href="#">
  Bio
</NavItem>
<NavItem eventKey={3} href="#">
  Media
</NavItem> */
