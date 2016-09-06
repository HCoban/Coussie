import RestaurantShow from './show';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const restaurantId = parseInt(ownProps.params.restaurantId);
  const restaurant = state.restaurants[restaurantId] || {reviews: {}};

  return {
    restaurantId,
    restaurant,
    currentUser: state.session.currentUser
  };
};

const RestaurantShowContainer = connect(
  mapStateToProps
)(RestaurantShow);

export default RestaurantShowContainer;
