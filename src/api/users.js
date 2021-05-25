import axios from 'axios';

export const login = (data) => {
  return axios.get('/login', data)
};
