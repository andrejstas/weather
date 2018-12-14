import { ADD_CITY, REMOVE_CITY } from '../actions/types';

const cityReducerDefaultState = [];

export default (state = cityReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return [action.city, ...state];
    case REMOVE_CITY:
      return state.filter(city => {
        return city.name !== action.city;
      });
    default:
      return state;
  }
};
