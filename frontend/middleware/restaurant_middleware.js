import { RestaurantConstants, receiveAllRestaurants } from '../actions/restaurant_actions';
import { fetchAllRestaurants } from '../util/restaurant_util';


const RestaurantMiddleware = ({dispatch}) => next => action => {
  const receiveAllRestaurantSuccess = (data) => dispatch(receiveAllRestaurants(data));

  switch (action.type) {
    case RestaurantConstants.REQUEST_ALL_RESTAURANTS:
      fetchAllRestaurants(receiveAllRestaurantSuccess);
      return next(action);
    default:
      return next(action);

  }
};

export default RestaurantMiddleware;
