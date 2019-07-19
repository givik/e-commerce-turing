import axios from 'axios';

const token = localStorage.token || null;
const baseURL = 'https://backendapi.turing.com';

export default axios.create({
  baseURL,
  headers: { 'user-key': token }
});

export const IMG_URL = baseURL + '/images/products/';
