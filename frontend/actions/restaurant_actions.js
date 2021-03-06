export const RestaurantConstants = {
  REQUEST_ALL_RESTAURANTS: "REQUEST_ALL_RESTAURANTS",
  RECEIVE_ALL_RESTAURANTS: "RECEIVE_ALL_RESTAURANTS",
  REQUEST_SINGLE_RESTAURANT: "REQUEST_SINGLE_RESTAURANT",
  RECEIVE_SINGLE_RESTAURANT: "RECEIVE_SINGLE_RESTAURANT",
  CREATE_REVIEW: "CREATE_REVIEW",
  EDIT_REVIEW: "EDIT_REVIEW",
  FILTER: "FILTER"
};

export const requestAllRestaurants = () => ({
  type: RestaurantConstants.REQUEST_ALL_RESTAURANTS
});

export const receiveAllRestaurants = (restaurants) => ({
  type: RestaurantConstants.RECEIVE_ALL_RESTAURANTS,
  restaurants
});

export const requestSingleRestaurant = (id) => ({
  type: RestaurantConstants.REQUEST_SINGLE_RESTAURANT,
  id
});

export const receiveSingleRestaurant = (restaurant) => ({
  type: RestaurantConstants.RECEIVE_SINGLE_RESTAURANT,
  restaurant
});

export const createReview = (review) => ({
  type: RestaurantConstants.CREATE_REVIEW,
  review
});

export const editReview = (review) => ({
  type: RestaurantConstants.EDIT_REVIEW,
  review
});

export const filter = (query) => ({
  type: RestaurantConstants.FILTER,
  query
});
