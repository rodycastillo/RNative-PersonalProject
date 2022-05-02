// import React, {createContext, useReducer, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../api/api"
import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

const authInitialState = {
  status: 'checking',
  token: null,
  user: null,
};

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = async (data) => {
      try {
        const {user, token} = await api.post('/login', data)
        dispatch({
          type: "LOGIN",
          payload: {
            token,
            user
          }
        })
        await AsyncStorage.setItem('token', data.token)
      } catch (error) {
        console.log('Error: ' +  error)
      }
    }
    const signUp = async (data) => {
      try {
        await api.post('register', data)
      } catch (error) {
        console.log('Error: ' +  error)
      }
    }

    const logOut =  async() => {
      await AsyncStorage.removeItem('token')
      dispatch({ type: 'LOGOUT'})
    }


  return (
    <AuthContext.Provider value={{...state, signIn, signUp, logOut}}>
      {children}
    </AuthContext.Provider>
  );
};
