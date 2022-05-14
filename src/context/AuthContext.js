// import React, {createContext, useReducer, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../api/api';
import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';
import axios from 'axios';
import {userLogin, userRegister} from '../services/auth';

const authInitialState = {
  status: 'checking',
  token: null,
  user: null,
};

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = async dts => {
    try {
      const data = await userLogin(dts);
      console.log(data, 'SIGNIN');
      dispatch({
        type: 'LOGIN',
        payload: {
          token: data.token,
          user: data.user,
        },
      });
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      await AsyncStorage.setItem('isLogIn', JSON.stringify(true));
      await AsyncStorage.setItem('token', data.token);
    } catch (error) {
      console.log('Error: ' + error);
    }
  };
  const signUp = async dts => {
    try {
      const data = await userRegister(dts);
      console.log(data, 'SIGNIN');
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'LOGOUT'});
  };

  return (
    <AuthContext.Provider value={{...state, signIn, signUp, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};
