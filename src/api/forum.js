import axios from 'axios';

export const getForums = () => {
  return axios.get('/forum')
};
