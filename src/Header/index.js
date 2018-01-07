import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import Logo from '../icons/Logo';

const Header = ({ user }) => (
  <div className="header">
    <Logo className="logo" width="64" height="64" />
    {user && (
      <div className="profile">
        <div className="profile-info">
          <div className="profile-name">{user.display_name || user.id}</div>
          <Link to="/" className="profile-logout">
            Log out
          </Link>
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
