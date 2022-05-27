import axios from 'axios';
import {BASE_URL} from '@env';

export const userLogin = async dts => {
  const {data} = await axios.post(`${BASE_URL}/auth/login`, dts);
  console.log(data);
  return data;
};

export const userRegister = async dts => {
  const {data} = await axios.post(`${BASE_URL}/auth/register`, dts);
  console.log(data);
  return data;
};
