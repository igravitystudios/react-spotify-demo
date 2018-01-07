import React, { Component, Fragment } from 'react';

import axiosClient from '../utils/axiosClient';

import Artist from '../icons/Artist';
import PageTitle from '../PageTitle';
import SearchBox from '../SearchBox';
import SearchResults from '../SearchResults';

class Search extends Component {
  state = {
    results: null,
  };

  onSearch = query => {
    if (query) {
      axiosClient
        .get('/search', {
          params: {
            q: query,
            type: 'artist',
          },
        })
        .then(response => {
          console.log(response);
          return this.setState(() => ({
            results: response.data && response.data.artists,
          }));
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  render() {
    return (
      <Fragment>
        <PageTitle icon={<Artist />} title="Artist Search" />
        <SearchBox onSubmit={this.onSearch} />
        <SearchResults items={this.state.results && this.state.results.items} />
      </Fragment>
    );
  }
}

export default Search;
