import React from 'react';
import './index.css';

const Button = ({ children, element: Element, ...rest }) => (
  <Element className="button" {...rest}>
    {children}
  </Element>
);

Button.defaultProps = {
  element: 'button',
};

export default Button;
