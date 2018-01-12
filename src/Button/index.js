import React from 'react';
import classNames from 'classnames';
import './index.css';

const Button = ({ children, className, element: Element, ...rest }) => (
  <Element className={classNames('button', className)} {...rest}>
    {children}
  </Element>
);

Button.defaultProps = {
  element: 'button',
};

export default Button;
