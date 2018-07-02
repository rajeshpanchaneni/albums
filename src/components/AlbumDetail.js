import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = () => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
