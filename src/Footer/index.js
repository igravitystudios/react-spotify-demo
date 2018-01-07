import React from 'react';
import './index.css';

import Technolologist from '../icons/Technolologist';

const Footer = () => (
  <div className="footer">
    <hr />
    <div className="footer-wrapper">
      <a
        href="https://chrisheninger.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Technolologist width="96" />
      </a>
      <div className="plug">
        <h4>Need help with your frontend development?</h4>
        <p>
          I'd love to work with you and your team to build extraordinary user
          interfaces and experiences using React.js for web and native apps.
        </p>
        <p>
          I'm available for contract via
          <a
            href="https://igravitystudios.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            iGravity Studios{' '}
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
