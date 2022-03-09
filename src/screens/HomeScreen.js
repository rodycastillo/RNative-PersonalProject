import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {CardReport} from '../components/CardReport';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports</Text>
      <View style={styles.reports}>
        <ScrollView style={{width: '100%'}}>
          <CardReport />
          <CardReport />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 15,
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
  reports: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
