import axios from 'axios';

export const getForums = (data) => {
  return axios.get(`/forum?_page=${data || 1}&_limit=5`)
};

export const getForumDetail = (data) => {
  return axios.get(`/forum/${data}`)
};
