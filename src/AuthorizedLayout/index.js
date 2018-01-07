import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';

import axiosClient from '../utils/axiosClient';

import Header from '../Header';
import Search from '../Search';

class AuthorizedLayout extends Component {
  constructor(props) {
    super(props);

    axiosClient.defaults.headers.common['Authorization'] =
      'Bearer ' + this.props.accessToken;

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    axiosClient
      .get('/me', {})
      .then(response => {
        console.log(response);
        return this.setState(() => ({
          user: response.data,
        }));
      })
      .catch(error => {
        console.log(error);

        return this.props.history.push({
          pathname: '/',
          state: { from: this.props.location },
        });
      });
  }

  render() {
    if (!this.state.user) {
      return <div>Loading</div>;
    }

    return (
      <Fragment>
        <Header user={this.state.user} />
        <div className="route">
          <Switch>
            <Route exact path="/search">
              <Search {...this.props} />
            </Route>
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default AuthorizedLayout;
