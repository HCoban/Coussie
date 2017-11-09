export const ReviewConstants = {
  REQUEST_MORE_REVIEWS: "REQUEST_MORE_REVIEWS",
  RECEIVE_MORE_REVIEWS: "RECEIVE_MORE_REVIEWS",
  CLEAR_REVIEWS: "CLEAR_REVIEWS"
}

export const requestMoreReviews = (restaurantId, page) => ({
  type: ReviewConstants.REQUEST_MORE_REVIEWS,
  restaurantId,
  page
});

export const receiveMoreReviews = (reviewList) => ({
  type: ReviewConstants.RECEIVE_MORE_REVIEWS,
  reviewList
});

export const clearReviews = () => ({
  type: ReviewConstants.CLEAR_REVIEWS
})