import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = (/*{ desructure props here }*/) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
    </nav>
  );
};

export default Nav;
