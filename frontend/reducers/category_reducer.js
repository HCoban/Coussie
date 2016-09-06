import { CategoryConstants } from '../actions/category_actions';
import merge from 'lodash/merge';

const CategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CategoryConstants.RECEIVE_ALL_CATEGORIES:
      return merge({}, state, action.categories);
    default:
      return state;
  }
};

export default CategoryReducer;
