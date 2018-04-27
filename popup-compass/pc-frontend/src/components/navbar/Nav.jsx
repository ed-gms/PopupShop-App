import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <Navbar color="elegant-color" dark expand="md" scrolling>
        <NavbarBrand href="/">
          <i className="navbar-brand fa fa-compass fa-5x" aria-hidden="false"> <strong className="font-weight-bold">Pop-up Compass</strong> </i>
        </NavbarBrand>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="/" onClick={this.onClick}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={this.onClick}>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/popupshops" onClick={this.onClick}>Pop-up Shops</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/join" onClick={this.onClick}>Join</NavLink>
            </NavItem>

          </NavbarNav>
        </Collapse>
      </Navbar>

    );
  }
}

export default Nav;