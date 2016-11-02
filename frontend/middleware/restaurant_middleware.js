import { RestaurantConstants, receiveAllRestaurants, receiveSingleRestaurant, filter } from '../actions/restaurant_actions';
import { receiveSingleCategory } from '../actions/category_actions';
import { fetchAllRestaurants, fetchFilteredRestaurants, fetchSingleRestaurant, createReview, editReview, deleteReview } from '../util/restaurant_util';


const RestaurantMiddleware = ({dispatch}) => next => action => {
  const receiveAllRestaurantSuccess = (data) => dispatch(receiveAllRestaurants(data));
  const receiveFilteredRestaurantsSuccess = (data) => dispatch(receiveSingleCategory(data));
  const receiveSingleRestaurantSuccess = (data) => dispatch(receiveSingleRestaurant(data));

  switch (action.type) {
    case RestaurantConstants.REQUEST_ALL_RESTAURANTS:
      fetchAllRestaurants(receiveAllRestaurantSuccess);
      return next(action);
    case RestaurantConstants.REQUEST_SINGLE_RESTAURANT:
      fetchSingleRestaurant(action.id, receiveSingleRestaurantSuccess);
      return next(action);
    case RestaurantConstants.CREATE_REVIEW:
      return createReview(action.review, receiveAllRestaurantSuccess);
    case RestaurantConstants.EDIT_REVIEW:
      return editReview(action.review, receiveAllRestaurantSuccess);
    case RestaurantConstants.DELETE_REVIEW:
      return deleteReview(action.review, receiveFilteredRestaurantsSuccess);
    case RestaurantConstants.FILTER:
      fetchFilteredRestaurants(action.query, receiveFilteredRestaurantsSuccess);
      return next(action);
    default:
      return next(action);

  }
};

export default RestaurantMiddleware;
