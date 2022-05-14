import axios from 'axios';

export const userLogin = async dts => {
  const {data} = await axios.post(
    'http://localhost:9000/api/v1.0/auth/login',
    dts,
  );
  console.log(data);
  return data;
};

export const userRegister = async dts => {
  const {data} = await axios.post(
    'http://localhost:9000/api/v1.0/auth/register',
    dts,
  );
  console.log(data);
  return data;
};
