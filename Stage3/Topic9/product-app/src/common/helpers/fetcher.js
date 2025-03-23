import axios from 'axios';

export const fetcher = axios.create({
  baseURL: 'https://blog-api-t6u0.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

fetcher.interceptors.request.use((config) => {
  config.headers.Authorization = `Breare ${localStorage.getItem(
    'access_token'
  )}`;

  return config;
});

fetcher.interceptors.response.use(
  (res) => {
    // console.log('res', res);

    // console.log('STATUS:', res.status);
    // console.log('METHOD:', res.config.method);

    return res;
  },
  (err) => {
    if (err.status == 401) {
      localStorage.removeItem('access_token');
    }
    return err;
  }
);
