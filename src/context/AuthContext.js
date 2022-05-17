import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';
import {userLogin, userRegister} from '../services/auth';
import {Alert} from 'react-native';

const authInitialState = {
  state: false,
  user: null,
  message: 'not-authenticated',
  token: null,
};

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = async dts => {
    try {
      const data = await userLogin(dts);
      dispatch({
        type: 'LOGIN',
        payload: {
          token: data.token,
          user: data.user,
        },
      });
    } catch (error) {
      Alert.alert('Login Incorrecto');
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

  return (
    <AuthContext.Provider value={{...state, dispatch, signIn, signUp}}>
      {children}
    </AuthContext.Provider>
  );
};
