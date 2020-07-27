import axios from 'axios';

export const HOST = process.env.API_URI || 'https://itmc.herokuapp.com/';

const Api = axios.create({
  baseURL: HOST,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
  withCredentials: false,
});

Api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default Api;
