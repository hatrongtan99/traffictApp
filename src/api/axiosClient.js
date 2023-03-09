import axios from 'axios';
import {REACT_NATIVE_APP_BASE_API} from '@env';

const axiosClient = axios.create({
  baseURL: REACT_NATIVE_APP_BASE_API,
  headers: {
    'content-tyle': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => Promise.reject(error),
);

export default axiosClient;
