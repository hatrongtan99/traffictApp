import axios from 'axios';
import axiosClient from './axiosClient';

export const getAllHmi = async () => {
  return axiosClient.get('/api/SCV/GetHMI').then(data => data.data);
};

export const getHmiById = async id => {
  return axiosClient.get(`/api/SCV/GetHMI/${id}`).then(data => data.data);
};

export const getInfoHmi = async id => {
  return axiosClient.get(`/api/Web/GetInfo/${id}`).then(data => data.data);
};

export const getTimeHmi = async id => {
  return axiosClient.get(`/api/Web/GetTime/${id}`).then(data => data.data);
};

export const location = async params => {
  return axios('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
    params,
  });
};

// export const findPlace = async params => {
//   return axios(
//     'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
//     {params},
//   );
// };

// export const getDetailLocation = async params => {
//   return axios('https://maps.googleapis.com/maps/api/place/details/json', {
//     params,
//   });
// };
