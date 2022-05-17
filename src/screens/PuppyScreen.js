import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {CardReport} from '../components/CardReport';

export const PuppyScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#F1DDBF'}}>
        <CardReport name={'Casper'} />
      </View>
    </SafeAreaView>
  );
};
