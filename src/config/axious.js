import axios from 'axios';
import { localStorageConstant } from '../constant';

export const HOST = process.env.API_URI || 'api_endpoints'

const Api = axios.create({
  baseURL : HOST,
  headers:{
    Accept : 'application/json',
    'Content-Type' : 'application/json',
    'Cache-Control' : 'no-cache',
  },
  withCredentials : false,
});

Api.interceptors.request.use((config)=>{
  const accessToken = localStorage.getItem(localStorageConstant.ACCESS_TOKEN);
  if(accessToken){
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
})

export default Api;