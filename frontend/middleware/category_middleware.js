import { CategoryConstants, receiveAllCategories, receiveSingleCategory } from '../actions/category_actions';
import { fetchAllCategories, fetchSingleCategory } from '../util/category_util';

const CategoryMiddleware = ({dispatch}) => next => action => {
  const receiveAllCategoriesSuccess = (data) => dispatch(receiveAllCategories(data));
  const receiveSingleCategorySuccess = (data) => dispatch(receiveSingleCategory(data));
  switch (action.type) {
    case CategoryConstants.REQUEST_ALL_CATEGORIES:
      fetchAllCategories(receiveAllCategoriesSuccess);
      return next(action);
    case CategoryConstants.REQUEST_SINGLE_CATEGORY:
      fetchSingleCategory(action.category.value, receiveSingleCategorySuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CategoryMiddleware;
