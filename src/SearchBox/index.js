import React, { Component } from 'react';
import './index.css';

import Button from '../Button';

class SearchBox extends Component {
  state = {
    query: '',
  };

  onChange = e => {
    const newValue = e.target.value;
    this.setState({
      query: newValue,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input
          className="input"
          type="text"
          name="search"
          placeholder="Search by artist name"
          onChange={this.onChange}
          value={this.state.query}
          autoFocus
        />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

export default SearchBox;
