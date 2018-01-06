import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import parseLocationHash from './utils/parseLocationHash';

import Footer from './Footer';
import Home from './Home';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);

    let authorized;
    if (this.props.location && this.props.location.pathname === '/authorized') {
      authorized = parseLocationHash(this.props.location.hash);
    }

    this.state = {
      isAuthorized: authorized ? true : false,
      accessToken: authorized ? authorized.access_token : null,
    };
  }

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/authorized" component={Search} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
