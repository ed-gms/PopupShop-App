import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Join extends Component {
  render() {
    return (
      <div>
        <h1>Invitation to sign up and add a pop-up shop</h1>
        <Link to="/createprofile">
        <button>Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default Join;