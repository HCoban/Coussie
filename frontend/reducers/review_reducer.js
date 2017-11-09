import { ReviewConstants } from "../actions/review_actions";
import merge from "lodash/merge";

const initialState = { currentPage: 0, reviewList: [] };

const ReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReviewConstants.RECEIVE_MORE_REVIEWS:
      let newState = { currentPage: state.currentPage + 1 }
      newState.reviewList = state.reviewList.concat(action.reviewList)
      return newState;
    case ReviewConstants.CLEAR_REVIEWS:
      return initialState;
    default:
      return state;
  }
}

export default ReviewReducer;