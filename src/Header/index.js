import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import Logo from '../icons/Logo';

const Header = ({ user }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" width="64" height="64" />
    </Link>
    {user && (
      <div className="profile">
        <div className="profile-info">
          <div className="profile-welcome">You are signed in as</div>
          <div className="profile-name">{user.display_name || user.id}</div>
        </div>
        <div className="profile-image">
          <img
            src={
              (user.images && user.images[0] && user.images[0].url) ||
              'https://placehold.it/128x128'
            }
            alt="Spotify profile"
          />
        </div>
      </div>
    )}
  </div>
);

export default Header;
