export const CategoryConstants = {
  REQUEST_ALL_CATEGORIES: "REQUEST_ALL_CATEGORIES",
  RECEIVE_ALL_CATEGORIES: "RECEIVE_ALL_CATEGORIES",
  REQUEST_SINGLE_CATEGORY: "REQUEST_SINGLE_CATEGORY",
  RECEIVE_SINGLE_CATEGORY: "RECEIVE_SINGLE_CATEGORY"
};

export const requestAllCategories = () => ({
  type: CategoryConstants.REQUEST_ALL_CATEGORIES,
});

export const receiveAllCategories = (categories) => ({
  type: CategoryConstants.RECEIVE_ALL_CATEGORIES,
  categories
});

export const requestSingleCategory = (category) => ({
  type: CategoryConstants.REQUEST_SINGLE_CATEGORY,
  category
});

export const receiveSingleCategory = (restaurants) => ({
  type: CategoryConstants.RECEIVE_SINGLE_CATEGORY,
  restaurants
});
