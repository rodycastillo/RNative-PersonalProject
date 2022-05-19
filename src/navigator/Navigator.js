import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {TabsNavigator} from './TabsNavigator';
import {AuthContext} from '../context/AuthContext';
import {WelcomeScreen} from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {token} = useContext(AuthContext);

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
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Tabs" component={TabsNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};
