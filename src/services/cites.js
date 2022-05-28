import axios from 'axios';
import {BASE_URL} from '@env';

export const getOnePuppyByDni = async dni => {
  return await axios.get(`${BASE_URL}/cites/puppy/${dni}`);
};

export const createPuppyCite = async data => {
  return await axios.post(`${BASE_URL}/cites/`, data);
};
