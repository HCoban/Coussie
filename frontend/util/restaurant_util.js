export const fetchAllRestaurants = (success) => {
  $.ajax({
    method: "GET",
    url: "api/restaurants",
    success
  });
};
