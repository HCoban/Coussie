import RestaurantShow from './show';
import { connect } from 'react-redux';
import { editReview, deleteReview, requestSingleRestaurant } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
  const restaurantId = parseInt(ownProps.params.restaurantId);
  const restaurant = state.restaurants[restaurantId] || {reviews: {}, images: {}};


  return {
    restaurantId,
    restaurant,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id)),
  editReview: (review) => dispatch(editReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review))
});

const RestaurantShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantShow);

export default RestaurantShowContainer;
