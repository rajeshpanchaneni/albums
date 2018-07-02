//second Project

import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state= { albums: [] };
  componentWillMount () {
    axios.get('https://http://rallycoding.herokuapp.com/api/music_albums')
    .then (response => this.setState({ albums: response.data}));
  }
  renderAlbums () {
    return this.state.albums.map (album =>
    <AlbumDetail key={album.title} props={album} />
  );
}
render() {
  console.log(this.state);
}

export default AlbumList;
