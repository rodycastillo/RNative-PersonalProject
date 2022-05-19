import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const WelcomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(252, 255, 255)',
      }}>
      <View style={styles.paws}>
        <Image
          source={require('../assets/images/paw.jpg')}
          style={{
            width: 70,
            height: 70,
            alignSelf: 'flex-start',
            borderRadius: 1000,
          }}
        />
        <Image
          source={require('../assets/images/paw.jpg')}
          style={{
            width: 70,
            height: 70,
            alignSelf: 'flex-end',
            borderRadius: 1000,
          }}
        />
        <Image
          source={require('../assets/images/paw.jpg')}
          style={{
            width: 70,
            height: 70,
            alignSelf: 'flex-start',
            borderRadius: 1000,
          }}
        />
        <Image
          source={require('../assets/images/paw.jpg')}
          style={{
            width: 70,
            height: 70,
            alignSelf: 'flex-end',
            borderRadius: 1000,
          }}
        />
      </View>
      <View style={styles.container}>
        <View style={{paddingTop: 20, paddingRight: 20}}>
          <Text style={styles.titleTxt}>Welcome to</Text>
          <Text style={styles.titleTxt}>Vet Center</Text>
        </View>
        <Image
          source={require('../assets/images/slider1.jpg')}
          style={styles.petImg}
        />
        <View style={styles.boxBtn}>
          <TouchableOpacity
            style={styles.btnToTabs}
            activeOpacity={0.8}
            onPress={() => navigation.replace('Tabs')}>
            <Text style={styles.btnTxt}>Let's GO!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paws: {
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    position: 'absolute',
    left: 25,
    transform: [{rotate: '40deg'}],
  },
  container: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    width: '100%',
    height: '70%',
  },
  titleTxt: {
    textAlign: 'right',
    fontSize: 38,
    fontWeight: '700',
    color: '#525E75',
  },
  petImg: {
    width: 340,
    height: 370,
    bottom: 0,
    position: 'absolute',
    right: 0,
  },
  boxBtn: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    width: '100%',
    alignItems: 'center',
  },
  btnToTabs: {
    backgroundColor: '#92BA92',
    borderRadius: 1000,
    width: '60%',
  },
  btnTxt: {
    color: '#fff',
    fontWeight: '800',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 20,
    textAlign: 'center',
  },
});
