import RestaurantShow from './show';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const restaurantId = parseInt(ownProps.params.restaurantId);
  const restaurant = state.restaurants[restaurantId];

  return {
    restaurantId,
    restaurant
  };
};

const RestaurantShowContainer = connect(
  mapStateToProps
)(RestaurantShow);

export default RestaurantShowContainer;