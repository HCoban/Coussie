export const fetchAllRestaurants = (success) => {
  $.ajax({
    method: "GET",
    url: "api/restaurants",
    success
  });
};

export const createReview = (data, success) => {
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: data,
    success
  });
};

export const fetchFilteredRestaurants = (data, success) => {
  $.ajax({
    method: "GET",
    url: "api/restaurants",
    data: data,
    success
  });
};
