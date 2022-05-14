import axios from 'axios';

export const getOnePuppyByDni = async dni => {
  return await axios.get(`http://localhost:9000/api/v1.0/cites/puppy/${dni}`);
};
