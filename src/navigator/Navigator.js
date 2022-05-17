import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {TabsNavigator} from './TabsNavigator';
import {AuthContext} from '../context/AuthContext';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {token} = useContext(AuthContext);

  console.log(token);

  return (
    <Stack.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {token === null ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen name="Tabs" component={TabsNavigator} />
      )}
    </Stack.Navigator>
  );
};
