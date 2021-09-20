import { create } from 'apisauce';

const baseURL = process.env.REACT_APP_ENDPOINT;

const api = create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
});

export default api;
