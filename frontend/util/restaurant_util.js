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
  let targetUrl = `api/reviews/${reviewId.review}`;
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
