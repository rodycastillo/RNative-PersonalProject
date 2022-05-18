import axios from 'axios';
import React, {createContext, useReducer} from 'react';

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
      const {data} = await axios.get(
        `http://localhost:9000/api/v1.0/cites/puppy/${dni}`,
      );
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

  return (
    <CitesContext.Provider value={{cites, dispatch, loadCites}}>
      {children}
    </CitesContext.Provider>
  );
};
