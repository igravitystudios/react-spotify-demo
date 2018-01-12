import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.css';

import Button from '../Button';

const PageTitle = ({ backTo, history, icon, title }) => {
  return (
    <div className="page-title">
      {backTo && (
        <Button className="back" onClick={history.goBack}>
          {backTo}
        </Button>
      )}
      {icon && (
        <div className="icon">
          {React.cloneElement(icon, {
            width: 196,
            height: 196,
          })}
        </div>
      )}
      <div className="title">{title}</div>
    </div>
  );
};

PageTitle.propTypes = {
  backTo: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
};

export default withRouter(PageTitle);
