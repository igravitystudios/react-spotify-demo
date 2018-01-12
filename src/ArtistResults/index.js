import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class ArtistResults extends Component {
  renderResult = result => (
    <Link
      className="result"
      key={result.id}
      to={`/artist/${this.props.artistId}/album/${result.id}`}
    >
      <div className="result-image">
        <img
          src={
            (result.images[0] && result.images[0].url) ||
            'https://placehold.it/128x128'
          }
          alt="Album cover artwork"
        />
      </div>
      <div className="result-name">{result.name}</div>
    </Link>
  );

  render() {
    if (!this.props.items) {
      return null;
    }

    return (
      <div className="artist-results">
        {this.props.items.map(this.renderResult)}
      </div>
    );
  }
}

export default ArtistResults;
