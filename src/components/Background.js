import React from 'react';
import {View} from 'react-native';

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#525E75',
        top: -150,
        width: 1000,
        height: 1000,
        transform: [{rotate: '-55deg'}],
      }}
    />
  );
};
