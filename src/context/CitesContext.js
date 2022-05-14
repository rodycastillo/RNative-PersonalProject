import axios from 'axios';
import React, {createContext, useState, useEffect, useContext} from 'react';
import {AuthContext} from './AuthContext';

export const CitesContext = createContext({});

export const CitesProvider = ({children}) => {
  const [cites, setCites] = useState([]);

  const {user} = useContext(AuthContext);

  useEffect(() => {
    loadCites();
  }, []);

  const loadCites = async () => {
    const resp = await axios.get(
      `http://localhost:9000/api/v1.0/cites/puppy/${user.dni}`,
    );
    setCites([...resp.data]);
    console.log(resp.data, 'Line 21');
  };

  return (
    <CitesContext.Provider value={{cites, loadCites}}>
      {children}
    </CitesContext.Provider>
  );
};
