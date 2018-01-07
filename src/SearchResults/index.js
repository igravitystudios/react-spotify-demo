import React, { Component } from 'react';
import './index.css';

class SearchResults extends Component {
  renderResult(result) {
    return (
      <div className="result" key={result.id}>
        <div className="result-image">
          <img
            src={
              (result.images[0] && result.images[0].url) ||
              'https://placehold.it/128x128'
            }
            alt="Search result artist profile"
          />
        </div>
        <div className="result-name">{result.name}</div>
      </div>
    );
  }

  renderLoading() {
    return;
  }

  render() {
    if (!this.props.items) {
      return null;
    }

    return (
      <div className="search-results">
        {this.props.items.map(this.renderResult)}
      </div>
    );
  }
}

export default SearchResults;
