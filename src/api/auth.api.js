import axiosClient from './axiosClient';

import {REACT_NATIVE_APP_BASE_AUTH} from '@env';

export const login = userInfo => {
  const url = '/api/Auth/Login';
  return axiosClient.post(url, userInfo, {
    baseURL: REACT_NATIVE_APP_BASE_AUTH,
  });
};
