export const ReviewConstants = {
  REQUEST_MORE_REVIEWS: "REQUEST_MORE_REVIEWS",
  RECEIVE_MORE_REVIEWS: "RECEIVE_MORE_REVIEWS",
  DELETE_REVIEW: "DELETE_REVIEW",
  CLEAR_SINGLE_REVIEW: "CLEAR_SINGLE_REVIEW",
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

export const deleteReview = (reviewId) => ({
  type: ReviewConstants.DELETE_REVIEW,
  reviewId
});

export const clearSingleReview = (reviewId) => ({
  type: ReviewConstants.CLEAR_SINGLE_REVIEW,
  reviewId
})

export const clearReviews = () => ({
  type: ReviewConstants.CLEAR_REVIEWS
})