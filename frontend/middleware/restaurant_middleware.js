import { RestaurantConstants, receiveAllRestaurants, receiveSingleRestaurant, filter } from '../actions/restaurant_actions';
import { receiveMoreReviews, clearReviews, clearSingleReview, ReviewConstants } from '../actions/review_actions';
import { receiveSingleCategory } from '../actions/category_actions';
import { fetchAllRestaurants, fetchFilteredRestaurants, fetchMoreReviews, fetchSingleRestaurant, createReview, editReview, deleteReview } from '../util/restaurant_util';


const RestaurantMiddleware = ({dispatch, getState}) => next => action => {
  const receiveAllRestaurantSuccess = (data) => dispatch(receiveAllRestaurants(data));
  const receiveFilteredRestaurantsSuccess = (data) => {
    dispatch(clearReviews());
    dispatch(receiveSingleCategory(data));
  }
  const deleteReviewSuccess = (data) => dispatch(clearSingleReview(data))
  const receiveSingleRestaurantSuccess = (data) => dispatch(receiveSingleRestaurant(data));
  const receiveMoreReviewsSuccess = (data) => dispatch(receiveMoreReviews(data));

  switch (action.type) {
    case RestaurantConstants.REQUEST_ALL_RESTAURANTS:
      fetchAllRestaurants(receiveAllRestaurantSuccess);
      return next(action);
    case RestaurantConstants.REQUEST_SINGLE_RESTAURANT:
      fetchSingleRestaurant(action.id, receiveSingleRestaurantSuccess);
      return next(action);
    case ReviewConstants.REQUEST_MORE_REVIEWS:
      fetchMoreReviews(action.restaurantId, getState().reviews.currentPage, receiveMoreReviewsSuccess);
      return next(action);
    case RestaurantConstants.CREATE_REVIEW:
      createReview(action.review, receiveSingleRestaurantSuccess);
      return next(action);
    case RestaurantConstants.EDIT_REVIEW:
      return editReview(action.review, receiveAllRestaurantSuccess);
    case RestaurantConstants.DELETE_REVIEW:
      deleteReview(action.reviewId, deleteReviewSuccess);
      return next(action);
    case RestaurantConstants.FILTER:
      fetchFilteredRestaurants(action.query, receiveFilteredRestaurantsSuccess);
      return next(action);
    default:
      return next(action);

  }
};

export default RestaurantMiddleware;
