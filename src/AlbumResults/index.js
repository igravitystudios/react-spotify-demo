import React, { Component } from 'react';
import './index.css';

import Play from '../icons/Play';

class AlbumResults extends Component {
  renderResult = (result, index) => (
    <div
      key={result.id}
      className="result"
      onClick={() => this.props.playUri(result.uri)}
    >
      <div className="result-number">{index + 1}</div>
      <div className="result-name">{result.name}</div>
      <div className="result-icon">
        <Play />
      </div>
    </div>
  );

  render() {
    if (!this.props.items) {
      return null;
    }

    return (
      <div className="album-results">
        {this.props.items.map(this.renderResult)}
      </div>
    );
  }
}

export default AlbumResults;
