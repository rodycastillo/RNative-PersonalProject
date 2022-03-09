import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FadeInImage} from './FadeInImage';

export const CardReport = ({nro}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Report N^{nro}</Text>
      <FadeInImage
        style={style.imageThumbnail}
        uri={'https://source.unsplash.com/random?sig=1'}
      />
      <Text>Reportado por: Rody Castillo</Text>
      <Text>Incidente:</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#81a0a9',
    // flex: 1,
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginVertical: 10,
    padding: 10,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 150,
    marginVertical: 10,
  },
});
