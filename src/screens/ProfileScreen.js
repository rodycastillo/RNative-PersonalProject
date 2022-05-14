import React from 'react';
import {useContext} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const ProfileScreen = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Profile Screen</Text>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
};

export default ProfileScreen;
