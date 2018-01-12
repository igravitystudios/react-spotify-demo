import React, { Component, Fragment } from 'react';
import get from 'lodash/get';

import axiosClient from '../utils/axiosClient';

import PageTitle from '../PageTitle';
import ArtistResults from '../ArtistResults';

class Artist extends Component {
  state = {
    albums: null,
  };

  componentDidMount() {
    const { match: { params: { artistId } } } = this.props;

    if (artistId) {
      axiosClient
        .get(`/artists/${artistId}/albums`, {})
        .then(response => {
          console.log(response);
          this.setState({
            albums: response.data,
          });
        })
        .catch(error => {
          console.error(error);
        });

      axiosClient
        .get(`/artists/${artistId}`, {})
        .then(response => {
          console.log(response);
          this.setState({
            artist: response.data,
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  render() {
    if (!this.state.albums || !this.state.artist) {
      return <div>Loading</div>;
    }

    const artistPhoto = get(this.state, 'artist.images[0].url');
    const artistName = get(this.state, 'artist.name');
    const artistId = get(this.state, 'artist.id');
    const albums = get(this.state, 'albums.items');

    return (
      <Fragment>
        <PageTitle
          icon={<img className="circle" src={artistPhoto} alt="Artist cover" />}
          title={artistName}
          backTo="⬅ Back to search"
        />
        <ArtistResults artistId={artistId} items={albums} />
      </Fragment>
    );
  }
}

export default Artist;
