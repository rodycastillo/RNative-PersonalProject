import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Navigator} from './src/navigator/Navigator';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <Navigator />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
