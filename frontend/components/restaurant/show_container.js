import RestaurantShow from './show';
import { connect } from 'react-redux';
import { editReview, deleteReview, requestSingleRestaurant } from '../../actions/restaurant_actions';
import { requestMoreReviews } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
  const restaurantId = parseInt(ownProps.params.restaurantId);
  const restaurant = state.restaurants[restaurantId] || {reviews: {}, images: {}};
  const reviews = state.reviews.reviewList || [];
  const currentPage = state.reviews.currentPage || 0;

  return {
    restaurantId,
    restaurant,
    currentUser: state.session.currentUser,
    reviews,
    currentPage
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id)),
  requestMoreReviews: (id, page) => dispatch(requestMoreReviews(id, page)),
  editReview: (review) => dispatch(editReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review))
});

const RestaurantShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantShow);

export default RestaurantShowContainer;
