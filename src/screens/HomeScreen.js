import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardReport} from '../components/CardReport';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Puppy</Text>
      <CardReport />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    textDecorationColor: '#000',
    textDecorationLine: 'underline',
    padding: 20,
    fontWeight: '700',
  },
});
