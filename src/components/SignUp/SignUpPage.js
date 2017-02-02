import React, {Component} from 'react';
import {Link} from 'react-router';
// Import components
import Button from '../common/Button';
import Nav from '../common/Nav';

class SignUpPage extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <header>
          <h1>Sign Up Page</h1>
          <Button>Signup</Button>
        </header>
      </div>
    );
  }
}

export default SignUpPage;
