import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import Logo from '../icons/Logo';
import Button from '../Button';

const callbackUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000/authorized'
    : 'https://react-spotify-demo.igravitystudios.com/authorized';
const clientId = '5cc0bd96989c4597a304b9d56519429b';
const authorizeUrl =
  `https://accounts.spotify.com/authorize` +
  `?client_id=${clientId}` +
  `&redirect_uri=${encodeURIComponent(callbackUrl)}` +
  `&response_type=token`;

const Home = ({ isAuthorized }) => (
  <Fragment>
    <a
      className="github-fork-ribbon"
      href="https://github.com/igravitystudios/react-spotify-demo"
      data-ribbon="View Source on GitHub"
      title="View Source on GitHub"
    >
      View Source on GitHub
    </a>
    <div className="home">
      <Logo className="logo" width="240" height="240" />
      <h1 className="title">React Spotify Demo</h1>
      <h2 className="subtitle">azPHP Meetup – January 2018</h2>
      {!isAuthorized ? (
        <Button element="a" href={authorizeUrl}>
          Sign in with Spotify
        </Button>
      ) : (
        <Link className="button" to="/search">
          You are already signed in
        </Link>
      )}
      <a
        className="learn-more"
        href="https://github.com/igravitystudios/react-spotify-demo"
      >
        Learn More
      </a>
    </div>
  </Fragment>
);

export default Home;
