import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark elegant-color fixed-top scrolling-navbar">
        <div className="container">
          <Link to="/" className="nav-link">
            <i className="navbar-brand fa fa-compass fa-5x" aria-hidden="false"> <span className="font-weight-bold">Pop-up Compass</span> </i>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <Link to="/" className="nav-link"> Home
                <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/popupshops" className="nav-link">Pop-up Shops</Link>
              </li>
              <li className="nav-item">
                <Link to="/join" className="nav-link">Join</Link>
              </li>
            </ul>

            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link"><i className="fa fa-facebook"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><i className="fa fa-twitter"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><i className="fa fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
