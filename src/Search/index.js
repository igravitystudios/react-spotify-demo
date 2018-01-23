import React, { Component, Fragment } from 'react';

import axiosClient from '../utils/axiosClient';

import Artist from '../icons/Artist';
import PageTitle from '../PageTitle';
import SearchBox from '../SearchBox';
import SearchResults from '../SearchResults';

class Search extends Component {
  state = {
    results: null,
    loading: false,
  };

  onSearch = query => {
    if (query) {
      this.setState(() => ({
        loading: true,
      }));

      axiosClient
        .get('/search', {
          params: {
            q: query,
            type: 'artist',
          },
        })
        .then(response => {
          console.log(response);

          this.setState(() => ({
            results: response.data && response.data.artists,
            loading: false,
          }));
        })
        .catch(error => {
          console.error(error);
          this.setState(() => ({
            loading: true,
          }));
        });
    }
  };

  render() {
    return (
      <Fragment>
        <PageTitle icon={<Artist />} title="Artist Search" />
        <SearchBox onSubmit={this.onSearch} />
        <SearchResults
          loading={this.state.loading}
          items={this.state.results && this.state.results.items}
        />
      </Fragment>
    );
  }
}

export default Search;
