import React from 'react';
import {View} from 'react-native';

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#f4cd07',
        top: -250,
        width: 1000,
        height: 900,
        transform: [{rotate: '-75deg'}],
      }}
    />
  );
};
