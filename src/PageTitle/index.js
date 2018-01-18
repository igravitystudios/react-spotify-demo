import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.css';

import Button from '../Button';
import ArrowLeft from '../icons/ArrowLeft';

const PageTitle = ({ canGoBack, history, icon, title }) => {
  return (
    <div className="page-title">
      {canGoBack && (
        <Button className="back" onClick={history.goBack}>
          <ArrowLeft />
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
  canGoBack: PropTypes.bool,
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
};

export default withRouter(PageTitle);
