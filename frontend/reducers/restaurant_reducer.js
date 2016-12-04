import { RestaurantConstants } from '../actions/restaurant_actions';
import { CategoryConstants } from '../actions/category_actions';
import merge from 'lodash/merge';

const RestaurantReducer = (state = {}, action) => {
  switch (action.type) {
    case RestaurantConstants.RECEIVE_ALL_RESTAURANTS:
      return merge({}, state, action.restaurants);
    case CategoryConstants.RECEIVE_SINGLE_CATEGORY:
      return merge({}, action.restaurants);
    case RestaurantConstants.RECEIVE_SINGLE_RESTAURANT:
      return merge({}, state, action.restaurant);
    case RestaurantConstants.DELETE_SINGLE_REVIEW:
      let newState = Object.assign({}, state);
      newState[action.review.restaurant_id] = newState[action.review.restaurant_id] || {};
      delete newState[action.review.restaurant_id]["reviews"][action.review.review_id];
      return newState;
    default:
      return state;
  }
};

export default RestaurantReducer;
