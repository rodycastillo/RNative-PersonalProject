import React, {useContext, useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {PuppyScreen} from '../screens/PuppyScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {AuthContext} from '../context/AuthContext';
import NewCite from '../screens/NewCiteScreen';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  const {user} = useContext(AuthContext);
  const [routes, setRoutes] = useState({
    route1: 'Inicio',
    route2: 'My Pet',
    route3: 'Chat',
    route4: 'Perfil',
    route5: 'Add',
    route6: 'Nueva cita',
  });

  const routerRole = r => {
    switch (r) {
      case 'ADMIN_ROLE':
        return setRoutes({...routes, route2: 'Pets', route3: 'Chats'});
      default:
        return routes;
    }
  };

  useEffect(() => {
    routerRole(user?.rol);
  }, []);

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

            if (route.name === routes.route1) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === routes.route3) {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === routes.route4) {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === routes.route2) {
              iconName = focused ? 'paw' : 'paw-outline';
            } else if (route.name === routes.route6) {
              iconName = focused ? 'add-circle' : 'add-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#92BA92',
          tabBarInactiveTintColor: 'white',
        }))
      }
      // tabBarOptions={{
      //   activeBackgroundColor: '#525E75',
      //   inactiveBackgroundColor: '#525E75',
      //   style: {
      //     backgroundColor: '#CE4418',
      //   },
      // }}
      initialRouteName={routes.route1}
      barStyle={{backgroundColor: '#525E75'}}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#525E75'},
        }}
        name={routes.route1}
        component={HomeScreen}
      />
      <Tab.Screen
        name={routes.route2}
        options={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#525E75'},
        }}
        component={PuppyScreen}
      />
      <Tab.Screen
        name={routes.route6}
        options={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#525E75'},
        }}
        component={NewCite}
      />
      <Tab.Screen
        name={routes.route3}
        options={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#525E75'},
        }}
        component={ChatScreen}
      />
      <Tab.Screen
        name={routes.route4}
        options={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#525E75'},
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
