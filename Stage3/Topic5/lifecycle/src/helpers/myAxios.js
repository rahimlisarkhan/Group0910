import axios from 'axios';

export const myAxios = axios.create({
  baseURL: 'https://blog-api-t6u0.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
