import axios from 'axios';
import {BASE_URL} from '@env';
import React, {createContext, useReducer} from 'react';
import {createPuppyCite} from '../services/cites';

const initialCites = {
  cite: [],
};

const citesReducer = (state, action) => {
  switch (action.type) {
    case 'CITE':
      return {
        cite: action.payload.cite,
      };
    default:
      return state;
  }
};

export const CitesContext = createContext({});

export const CitesProvider = ({children}) => {
  const [cites, dispatch] = useReducer(citesReducer, initialCites);
  const loadCites = async dni => {
    try {
      const {data} = await axios.get(`${BASE_URL}/cites/puppy/${dni}`);
      dispatch({
        type: 'CITE',
        payload: {
          cite: data.puppy,
        },
      });
      console.log('Saved successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const createCite = async data => {
    try {
      const response = await createPuppyCite(data);
      console.log(response);
    } catch (error) {
      console.log('Error of createCite');
      console.log(error);
    }
  };

  return (
    <CitesContext.Provider value={{cites, dispatch, loadCites, createCite}}>
      {children}
    </CitesContext.Provider>
  );
};
