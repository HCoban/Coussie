import RestaurantShow from './show';
import { connect } from 'react-redux';
import { editReview, deleteReview } from '../../actions/restaurant_actions';

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
  editReview: (review) => dispatch(editReview(review)),
  deleteReview: (review) => dispatch(deleteReview(review))
});

const RestaurantShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantShow);

export default RestaurantShowContainer;
