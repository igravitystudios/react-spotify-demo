import React, { Component, Fragment } from 'react';
import './index.css';

import Logo from '../common/icons/Logo';

const authorizeUrl =
  `https://accounts.spotify.com/authorize` +
  `?client_id=5cc0bd96989c4597a304b9d56519429b` +
  `&redirect_uri=${encodeURIComponent('http://localhost:3000/authorized')}` +
  `&response_type=token`;

class Home extends Component {
  render() {
    return (
      <Fragment>
        <a
          className="github-fork-ribbon"
          href="https://github.com/chrisheninger/react-spotify-demo"
          data-ribbon="View Source on GitHub"
          title="View Source on GitHub"
        >
          View Source on GitHub
        </a>
        <div className="home">
          <Logo className="logo" width="240" height="240" />
          <h1 className="title">React Spotify Demo</h1>
          <h2 className="subtitle">azPHP Meetup – January 2018</h2>
          <a className="button" href={authorizeUrl}>
            Log in with Spotify
          </a>
          <a
            className="learn-more"
            href="https://github.com/chrisheninger/react-spotify-demo"
          >
            Learn More
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Home;
