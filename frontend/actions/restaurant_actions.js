export const RestaurantConstants = {
  REQUEST_ALL_RESTAURANTS: "REQUEST_ALL_RESTAURANTS",
  RECEIVE_ALL_RESTAURANTS: "RECEIVE_ALL_RESTAURANTS",
  CREATE_REVIEW: "CREATE_REVIEW",
  FILTER: "FILTER"
};

export const requestAllRestaurants = () => ({
  type: RestaurantConstants.REQUEST_ALL_RESTAURANTS
});

export const receiveAllRestaurants = (restaurants) => ({
  type: RestaurantConstants.RECEIVE_ALL_RESTAURANTS,
  restaurants,
});

export const createReview = (review) => ({
  type: RestaurantConstants.CREATE_REVIEW,
  review
});

export const filter = (query) => ({
  type: RestaurantConstants.FILTER,
  query
});
