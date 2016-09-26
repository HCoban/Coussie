import { connect } from 'react-redux';
import NewReviewForm from './form';
import { createReview } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
});

const NewReviewFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewReviewForm);

export default NewReviewFormContainer;
