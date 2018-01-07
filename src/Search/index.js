import React, { Component } from 'react';

import axiosClient from '../utils/axiosClient';

import Artist from '../icons/Artist';
import PageTitle from '../PageTitle';
import SearchBox from '../SearchBox';

class Search extends Component {
  state = {
    results: null,
  };

  onSearch = query => {
    if (query) {
      console.log(query);

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
      <div>
        <PageTitle icon={<Artist />} title="Artist search" />
        <SearchBox onSubmit={this.onSearch} />
      </div>
    );
  }
}

export default Search;
