import { RestaurantConstants, receiveAllRestaurants } from '../actions/restaurant_actions';
import { fetchAllRestaurants, createReview } from '../util/restaurant_util';


const RestaurantMiddleware = ({dispatch}) => next => action => {
  const receiveAllRestaurantSuccess = (data) => dispatch(receiveAllRestaurants(data));

  switch (action.type) {
    case RestaurantConstants.REQUEST_ALL_RESTAURANTS:
      fetchAllRestaurants(receiveAllRestaurantSuccess);
      return next(action);
    case RestaurantConstants.CREATE_REVIEW:
      return createReview(action.review, receiveAllRestaurantSuccess);
    default:
      return next(action);

  }
};

export default RestaurantMiddleware;
