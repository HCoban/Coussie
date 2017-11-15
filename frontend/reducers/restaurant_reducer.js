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
      let newStateWithRestaurant = Object.assign({}, state);
      newStateWithRestaurant[action.restaurant.id] = action.restaurant;
      return newStateWithRestaurant;
    case RestaurantConstants.DELETE_SINGLE_REVIEW:
      let newStateWithReview = Object.assign({}, state);
      newStateWithReview[action.review.restaurant_id] = newStateWithReview[action.review.restaurant_id] || {};
      delete newStateWithReview[action.review.restaurant_id]["reviews"][action.review.review_id];
      return newStateWithReview;
    default:
      return state;
  }
};

export default RestaurantReducer;
