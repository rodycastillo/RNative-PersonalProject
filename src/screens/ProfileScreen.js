import React from 'react';
import {useContext} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const ProfileScreen = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
