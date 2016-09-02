import { RestaurantConstants } from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantReducer = (state = {}, action) => {
  switch (action.type) {
    case RestaurantConstants.RECEIVE_ALL_RESTAURANTS:
      return merge({}, state, action.restaurants);
    default:
      return state;
  }
};

export default RestaurantReducer;
