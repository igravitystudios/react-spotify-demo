import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.css';

const PageTitle = ({ backTo, history, icon, title }) => {
  return (
    <div className="page-title">
      {backTo && <button onClick={history.goBack}>{backTo}</button>}
      {icon && (
        <div className="icon">
          {React.cloneElement(icon, {
            width: 128,
            height: 128,
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
