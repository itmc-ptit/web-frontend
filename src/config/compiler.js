import axios from 'axios';

export const COMPILER = 'https://judge0.p.rapidapi.com';

const API = axios.create({
  baseURL: COMPILER,
  headers: {
    'x-rapidapi-host': 'judge0.p.rapidapi.com',
    'x-rapidapi-key': '1acac99301msh22030e5b148bedfp17437ajsn1e70f724f627',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
});

export default API;
