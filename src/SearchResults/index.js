import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import ArrowRight from '../icons/ArrowRight';

class SearchResults extends Component {
  renderResult(result) {
    return (
      <Link className="result" key={result.id} to={`/artist/${result.id}`}>
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
        <div className="result-icon">
          <ArrowRight />
        </div>
      </Link>
    );
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
