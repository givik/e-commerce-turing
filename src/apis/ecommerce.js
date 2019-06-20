import axios from 'axios';

const token = localStorage.token || null;
console.log(token);
export default axios.create({
  baseURL: 'https://backendapi.turing.com',
  headers: {
    'user-key': token
  }
});
