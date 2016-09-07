import { RestaurantConstants, receiveAllRestaurants, filter } from '../actions/restaurant_actions';
import { receiveSingleCategory } from '../actions/category_actions';
import { fetchAllRestaurants, fetchFilteredRestaurants, createReview } from '../util/restaurant_util';


const RestaurantMiddleware = ({dispatch}) => next => action => {
  const receiveAllRestaurantSuccess = (data) => dispatch(receiveAllRestaurants(data));
  const receiveFilteredRestaurantsSuccess = (data) => dispatch(receiveSingleCategory(data));

  switch (action.type) {
    case RestaurantConstants.REQUEST_ALL_RESTAURANTS:
      fetchAllRestaurants(receiveAllRestaurantSuccess);
      return next(action);
    case RestaurantConstants.CREATE_REVIEW:
      return createReview(action.review, receiveAllRestaurantSuccess);
    case RestaurantConstants.FILTER:
      fetchFilteredRestaurants(action.query, receiveFilteredRestaurantsSuccess);
      return next(action);
    default:
      return next(action);

  }
};

export default RestaurantMiddleware;
