import React, { Component, Fragment } from 'react';
import get from 'lodash/get';

import axiosClient from '../utils/axiosClient';

import Loading from '../Loading';
import PageTitle from '../PageTitle';
import AlbumResults from '../AlbumResults';

class Album extends Component {
  state = {
    album: null,
  };

  componentDidMount() {
    const { match: { params: { albumId } } } = this.props;

    if (albumId) {
      axiosClient
        .get(`/albums/${albumId}`, {})
        .then(response => {
          console.log(response);
          this.setState({
            album: response.data,
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  render() {
    if (!this.state.album) {
      return <Loading />;
    }

    const albumPhoto = get(this.state, 'album.images[0].url');
    const albumName = get(this.state, 'album.name');
    const tracks = get(this.state, 'album.tracks.items');

    return (
      <Fragment>
        <PageTitle
          icon={<img className="circle" src={albumPhoto} alt="Album cover" />}
          title={albumName}
          canGoBack
        />
        <AlbumResults items={tracks} />
      </Fragment>
    );
  }
}

export default Album;
