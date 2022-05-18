import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../utils/constants';
import {FadeInImage} from './FadeInImage';

export const CardReport = ({
  name = '',
  img = 'https://source.unsplash.com/random?sig=1',
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerContainer, backgroundColor: '#92BA92'}}>
        <Text
          style={{
            ...styles.puppyName,
            top: top + 45,
          }}>
          <Icon name={'ios-paw'} size={39} color={'#525E75'} />
          {name}
        </Text>
        <FadeInImage style={styles.puppyImg} uri={img} />
      </View>
    </View>
    // <View style={style.container}>
    //   <Text style={style.title}>Report N^{nro}</Text>
    //   <FadeInImage
    //     style={style.imageThumbnail}
    //     uri={'https://source.unsplash.com/random?sig=1'}
    //   />
    //   <Text>Reportado por: Rody Castillo</Text>
    //   <Text>Incidente:</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
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
  headerContainer: {
    height: 340,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: '24',
  },
  backBtn: {
    position: 'absolute',
    left: 20,
  },
  puppyName: {
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
    fontWeight: 'bold',
    color: '#525E75',
    // fontFamily: FONTS.
  },
  puppyImg: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -30,
    borderRadius: 1000,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: '13',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
