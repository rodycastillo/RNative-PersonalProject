import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {PuppyScreen} from '../screens/PuppyScreen';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={
        ({
          headerShown: false,
          tabBarStyle: {backgroundColor: '#AD40AF'},
        },
        ({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'Puppy') {
              iconName = focused ? 'ios-paw' : 'ios-paw-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#92BA92',
          tabBarInactiveTintColor: 'white',
        }))
      }
      tabBarOptions={{
        activeBackgroundColor: '#525E75',
        inactiveBackgroundColor: '#525E75',
        style: {
          backgroundColor: '#CE4418',
        },
      }}
      initialRouteName="Home"
      barStyle={{backgroundColor: '#525E75'}}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#525E75'},
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Puppy"
        options={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#525E75'},
        }}
        component={PuppyScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#525E75'},
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
