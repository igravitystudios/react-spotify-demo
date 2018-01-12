import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import parseLocationHash from './utils/parseLocationHash';

import Home from './Home';
import AuthorizedLayout from './AuthorizedLayout';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    let authorized;
    if (this.props.location && this.props.location.pathname === '/authorized') {
      authorized = parseLocationHash(this.props.location.hash);
    }

    this.state = {
      accessToken: authorized ? authorized.access_token : null,
    };

    if (authorized) {
      this.props.history.replace('/search');
    }
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/">
            <Home isAuthorized={this.state.accessToken} />
          </Route>
          <AuthorizedLayout accessToken={this.state.accessToken} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
