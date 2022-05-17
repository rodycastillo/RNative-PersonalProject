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
        },
        ({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'Puppy') {
              iconName = focused ? 'ios-skull' : 'ios-skull-outline';
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
      shifting={true}
      labeled={false}
      sceneAnimationEnabled={false}
      activeColor="#00aea2"
      inactiveColor="#95a5a6"
      barStyle={{backgroundColor: '#354f52'}}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Puppy"
        options={{headerShown: false}}
        component={PuppyScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
