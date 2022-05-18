import axios from 'axios';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
// import {CardReport} from '../components/CardReport';
import {AuthContext} from '../context/AuthContext';
import {CitesContext} from '../context/CitesContext';

export const HomeScreen = () => {
  const {user} = useContext(AuthContext);
  const {loadCites} = useContext(CitesContext);

  useEffect(() => {
    setTimeout(async () => {
      await loadCites(user.dni);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.title}>This is the home</Text>
        {/* <CardReport name={puppy.puppyName} img={puppy.puppyPhoto}/> */}
        {/* <CardReport name={puppy.puppyName} />*/}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DDBF',
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
