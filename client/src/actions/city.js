import axios from 'axios';
import { ADD_CITY, REMOVE_CITY } from './types';

const API_URL = '/api/weather/';

export const addCity = (city = '') => {
  return async (dispatch, getState) => {
    const result = await axios.get(`${API_URL}${city}`);
    dispatch({ type: ADD_CITY, city: result.data });
  };
};

export const removeCity = (city = '') => ({
  type: REMOVE_CITY,
  city
});
