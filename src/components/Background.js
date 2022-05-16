import React from 'react';
import {View} from 'react-native';

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#2f3e46',
        top: -250,
        width: 1000,
        height: 900,
        transform: [{rotate: '-75deg'}],
      }}
    />
  );
};
