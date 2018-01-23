import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import store from 'store2';
import axiosClient from './utils/axiosClient';
import parseLocationHash from './utils/parseLocationHash';

import Home from './Home';
import AuthorizedLayout from './AuthorizedLayout';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    let authorized;
    let storedAccesstoken;
    if (props.location && props.location.pathname === '/authorized') {
      authorized = parseLocationHash(props.location.hash);
      store.set('accessToken', authorized.access_token);

      axiosClient.defaults.headers.common['Authorization'] =
        'Bearer ' + authorized.access_token;
    } else {
      storedAccesstoken = store.get('accessToken');

      axiosClient.defaults.headers.common['Authorization'] =
        'Bearer ' + storedAccesstoken;
    }

    this.state = {
      accessToken: authorized ? authorized.access_token : storedAccesstoken,
      user: null,
    };

    if (authorized) {
      this.props.history.replace('/search');
    }
  }

  componentDidMount() {
    axiosClient
      .get('/me', {})
      .then(response => {
        console.log(response);

        this.setState(() => ({
          user: response.data,
        }));
      })
      .catch(error => {
        console.log(error);

        this.setState({
          accessToken: null,
        });

        return this.props.history.push({
          pathname: '/',
          state: { from: this.props.location },
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/">
            <Home isAuthorized={this.state.accessToken} />
          </Route>
          <AuthorizedLayout
            accessToken={this.state.accessToken}
            user={this.state.user}
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
