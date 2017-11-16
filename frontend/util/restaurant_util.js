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

export const editReview = (data, success) => {
  $.ajax({
    method: "PATCH",
    url: `api/reviews/${data.review.id}`,
    data,
    success
  });
};

export const deleteReview = (reviewId, success) => {
  let targetUrl = `api/reviews/${reviewId}`;
  $.ajax({
    method: "DELETE",
    url: targetUrl,
    success: success
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

export const fetchSingleRestaurant = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/restaurants/${id}`,
    success: success
  });
};

export const fetchMoreReviews = (id, page, success) => {
  $.ajax({
    method: "GET",
    url: "api/reviews",
    data: { review: { restaurant_id: id, page: page } },
    success: success
  });
}