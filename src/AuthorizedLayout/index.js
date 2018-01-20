import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './index.css';

import Header from '../Header';
import Search from '../Search';
import Artist from '../Artist';
import Album from '../Album';

class AuthorizedLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header user={this.props.user} />
        <div className="route">
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/artist/:artistId" component={Artist} />
            <Route
              exact
              path="/artist/:artistId/album/:albumId"
              component={Album}
            />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(AuthorizedLayout);
