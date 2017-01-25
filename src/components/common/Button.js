import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Button = ({ semantic, text, disabled, children }) => {
  // let { semantic, text, disabled } = this.props;

  let button;

  if ( semantic ) {
    button = <button>{children}</button>;
  } else {
    button = <a href="">{children}</a>;
  }

  return button;
};

Button.propTypes = {
  // the button should have
  type: PropTypes.oneOf(['ghost', 'filled']),

};

Button.defaultProps = {
  type: 'ghost'
};

export default Button;
