// import React, {createContext, useReducer, useEffect} from 'react';
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

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};
