import RestaurantIndex from './index';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => {
  return {

  };
};

const RestaurantIndexContainer = connect(
  mapStateToProps
)(RestaurantIndex);

export default RestaurantIndexContainer;
