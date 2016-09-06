import CategoryIndex from './index';
import { connect } from 'react-redux';
import { requestSingleCategory } from '../../actions/category_actions';

const mapStateToProps = (state) => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processClick: (category) => dispatch(requestSingleCategory(category))
});

const CategoryIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIndex);

export default CategoryIndexContainer;
