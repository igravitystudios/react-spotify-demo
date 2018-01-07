import React, { Component } from 'react';

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
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="search"
          onChange={this.onChange}
          value={this.state.query}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBox;
