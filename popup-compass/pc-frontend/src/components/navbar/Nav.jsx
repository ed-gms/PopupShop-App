import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="navbar navbar-light">
        <a className="navbar-brand text-light">My App Logo</a>
        <ul>
          <Link to="/"> <span>HOME</span> </Link>
          <Link to="/about"> <span>ABOUT</span> </Link>
          <Link to="/popupshops"> <span>SHOPS</span> </Link>
          <Link to="/join"> <span>JOIN</span> </Link>
        </ul>
      </div>
    );
  }
}

export default Nav;
