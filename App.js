import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Navigator} from './src/navigator/Navigator';
import {AuthProvider} from './src/context/AuthContext';
import {LogBox} from 'react-native';
import {CitesProvider} from './src/context/CitesContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const AppState = ({children}) => {
  return (
    <AuthProvider>
      <CitesProvider>{children}</CitesProvider>
    </AuthProvider>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppState>
          <Navigator />
        </AppState>
      </NavigationContainer>
    </>
  );
};

export default App;
