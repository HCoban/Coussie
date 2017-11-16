jest.mock('../../frontend/util/restaurant_util');

import RestaurantMiddleware from '../../frontend/middleware/restaurant_middleware';
import {
  RestaurantConstants,
  requestAllRestaurants,
  receiveAllRestaurants,
  requestSingleRestaurant,
  receiveSingleRestaurant,
  createReview,
  editReview,
  deleteReview,
  filter
} from '../../frontend/actions/restaurant_actions';

describe('RestaurantMiddleware', () => {
  let dispatch,
      mockNext,
      mockAction,
      RestaurantUtil,
      _reactRouter;

  beforeEach(() => {
    RestaurantUtil = require('../../frontend/util/restaurant_util');
    _reactRouter = require('react-router');
    _reactRouter.hashHistory.push = jest.fn();

    dispatch = jest.fn();
    mockNext = jest.fn(() => mockAction);
    mockAction = { type: mockAction };
  });

  it('exports a function', () => {
    expect(typeof RestaurantMiddleware).toEqual('function');
  });

  it('should return a properly curried function', () => {
    let nextFunction = RestaurantMiddleware({ dispatch });
    expect(typeof nextFunction).toEqual('function');

    let actionFunction = nextFunction(mockNext);
    expect(typeof actionFunction).toEqual('function');

    let result = actionFunction(mockAction);
    expect(typeof result).not.toEqual('function');
  });

  describe('by default', () => {
    it('should call next with the passed in action', () => {
      RestaurantMiddleware({ dispatch })(mockNext)(mockAction);
      expect(mockNext).toBeCalledWith(mockAction);
    });
  });

  describe('action type REQUEST_ALL_RESTAURANTS', () => {
    let requestAction;

    beforeEach(() => {
      requestAction = { type: RestaurantConstants.REQUEST_ALL_RESTAURANTS };
      RestaurantMiddleware({ dispatch })(mockNext)(requestAction);
    });

    afterEach(() => {
      RestaurantUtil.fetchAllRestaurants.mockClear();
    });

    it('should call the RestaurantUtil\'s fetchAllRestaurants function', () => {
      expect(RestaurantUtil.fetchAllRestaurants).toBeCalled();
    });

    it('should pass fetchAllRestaurants a callback that dispatches a receiveAllRestaurants function', () => {
      let actionCreator = RestaurantUtil.fetchAllRestaurants.mock.calls[0][0];
      expect(typeof actionCreator).toEqual('function');

      actionCreator();
      expect(dispatch).toBeCalledWith(receiveAllRestaurants());
    });

    it('should call next with the passed in action', () => {
      expect(mockNext).toBeCalledWith(requestAction);
    });
  });

  describe('action type REQUEST_SINGLE_RESTAURANT', () => {
    let requestAction;

    beforeEach(() => {
      requestAction = { id: 1, type: RestaurantConstants.REQUEST_SINGLE_RESTAURANT };
      RestaurantMiddleware({dispatch})(mockNext)(requestAction);
    });

    afterEach(() => {
      RestaurantUtil.fetchSingleRestaurant.mockClear();
    });

    it('should call the RestaurantUtil\'s fetchSingleRestaurant action', () => {
      expect(RestaurantUtil.fetchSingleRestaurant).toBeCalled();
    });

    it('should pass fetchSingleRestaurant a callback that dispatches a receiveSingleRestaurant function', () => {
      let id = RestaurantUtil.fetchSingleRestaurant.mock.calls[0][0];
      expect(id).toEqual(requestAction.id);
      let actionCreator = RestaurantUtil.fetchSingleRestaurant.mock.calls[0][1];
      expect(typeof actionCreator).toEqual('function');

      actionCreator();
      expect(dispatch).toBeCalledWith(receiveSingleRestaurant());
    });

    it('should call next witht the passed in action', () => {
      expect(mockNext).toBeCalledWith(requestAction);
    });
  });

  describe('action type CREATE_REVIEW', () => {
    let createAction;
    let mockReview;

    beforeEach(() => {
      mockReview = { vote: 4, description: "Nice place!" };
      createAction = { type: RestaurantConstants.CREATE_REVIEW, review: mockReview };
      RestaurantMiddleware({dispatch})(mockNext)(createAction);
    });

    afterEach(() => {
      RestaurantUtil.createReview.mockClear();
    });

    it('should call the RestaurantUtil\'s createReview function', () => {
      expect(RestaurantUtil.createReview).toBeCalled();
    });

    it('should pass createReview a review and a callback that dispatches a receiveSingleRestaurant action', () => {
      let review = RestaurantUtil.createReview.mock.calls[0][0];
      expect(review).toEqual(createAction.review);

      let actionCreator = RestaurantUtil.createReview.mock.calls[0][1];
      expect(typeof actionCreator).toEqual('function');

      actionCreator();
      expect(dispatch).toBeCalledWith(receiveSingleRestaurant());
    });

    it('should call next with the passed in action', () => {
      expect(mockNext).toBeCalledWith(createAction);
    });
  });
});
