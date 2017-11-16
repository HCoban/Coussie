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

describe('restaurant_actions', () => {

  describe('RestaurantConstants', () => {

    it('should contain REQUEST_ALL_RESTAURANTS constant', () => {
      expect(RestaurantConstants.REQUEST_ALL_RESTAURANTS).toEqual('REQUEST_ALL_RESTAURANTS');
    });

    it('should contain RECEIVE_ALL_RESTAURANTS constant', () => {
      expect(RestaurantConstants.RECEIVE_ALL_RESTAURANTS).toEqual('RECEIVE_ALL_RESTAURANTS');
    })

    it('should contain REQUEST_SINGLE_RESTAURANT constant', () => {
      expect(RestaurantConstants.REQUEST_SINGLE_RESTAURANT).toEqual('REQUEST_SINGLE_RESTAURANT');
    });

    it('should contain RECEIVE_SINGLE_RESTAURANT constant', () => {
      expect(RestaurantConstants.RECEIVE_SINGLE_RESTAURANT).toEqual('RECEIVE_SINGLE_RESTAURANT');
    });

    it('should contain CREATE_REVIEW constant', () => {
      expect(RestaurantConstants.CREATE_REVIEW).toEqual('CREATE_REVIEW');
    });

    it('should contain EDIT_REVIEW constant', () => {
      expect(RestaurantConstants.EDIT_REVIEW).toEqual('EDIT_REVIEW');
    });

    it('should contain DELETE_REVIEW constant', () => {
      expect(RestaurantConstants.DELETE_REVIEW).toEqual('DELETE_REVIEW');
    });

    it('should contain DELETE_SINGLE_REVIEW constant', () => {
      expect(RestaurantConstants.DELETE_SINGLE_REVIEW).toEqual('DELETE_SINGLE_REVIEW');
    });

    it('should contain FILTER constant', () => {
      expect(RestaurantConstants.FILTER).toEqual('FILTER');
    });
  });

  describe('requestAllRestaurants', () => {

    it('should export a requestAllRestaurants function', () => {
      expect(typeof requestAllRestaurants).toEqual('function');
    });

    it('should return an action with the type "REQUEST_ALL_RESTAURANTS"', () => {
      let action = requestAllRestaurants();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual('REQUEST_ALL_RESTAURANTS');
    });
  });

  describe('receiveAllRestaurants', () => {

    it('should export a receiveAllRestaurants function', () => {
      expect(typeof receiveAllRestaurants).toEqual('function');
    });

    it('should return an action with the type "RECEIVE_ALL_RESTAURANTS"', () => {
      let action = receiveAllRestaurants();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual('RECEIVE_ALL_RESTAURANTS');
    });

    it('should take in restaurants and set it as the action\'s restaurants property', () => {
      let restaurants = { fakerestaurant: 1 };
      let action = receiveAllRestaurants(restaurants);
      expect(action.restaurants).toEqual(restaurants);
    });
  });

  describe('requestSingleRestaurant', () => {
    it('should export a requestSingleRestaurant function', () => {
      expect(typeof requestSingleRestaurant).toEqual('function');
    });

    it('should return an action with the type "REQUEST_SINGLE_RESTAURANT"', () => {
      let action = requestSingleRestaurant();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual('REQUEST_SINGLE_RESTAURANT');
    });

    it('should take in an id and set it as the action\'s id property', () => {
      let action = requestSingleRestaurant(1);
      expect(action.id).toEqual(1);
    });
  });

  describe('receiveSingleRestaurant', () => {
    it('should export a receiveSingleRestaurant function', () => {
      expect(typeof receiveSingleRestaurant).toEqual('function');
    });

    it('should return an action with type RECEIVE_SINGLE_RESTAURANT', () => {
      let action = receiveSingleRestaurant();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual('RECEIVE_SINGLE_RESTAURANT');
    });

    it('should take in a restaurant and set it as action\'s restaurant property', () => {
      let restaurant = { fakerestaurant: 1 };
      let action = receiveSingleRestaurant(restaurant);
      expect(action.restaurant).toEqual(restaurant);
    });
  });

  describe('createReview', () => {
    it('should export a createReview function', () => {
      expect(typeof createReview).toEqual('function');
    });

    it('should return an action with type "CREATE_REVIEW"', () => {
      let action = createReview();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual('CREATE_REVIEW');
    });

    it('should take in a review and set it as action\'s review property', () => {
      let review = {fakereview: "hi"};
      let action = createReview(review);
      expect(action.review).toEqual(review);
    });
  });

  describe('editReview', () => {
    it('should export an editReview function', () => {
      expect(typeof editReview).toEqual('function');
    });

    it('should return an action with type "EDIT_REVIEW"', () => {
      let action = editReview();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual('EDIT_REVIEW');
    });

    it('should take in a review and set it as action\'s review property', () => {
      let review = {fakereview: 1};
      let action = editReview(review);
      expect(action.review).toEqual(review);
    });
  });

  describe('deleteReview', () => {
    it('should export a deleteReview function', () => {
      expect(typeof deleteReview).toEqual('function');
    });

    it('should return an action with type "DELETE_REVIEW"', () => {
      let action = deleteReview();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual("DELETE_REVIEW");
    });

    it('should take in a review and set it as action\'s review property', () => {
      let review = { fakereview: 1};
      let action = deleteReview(review);
      expect(action.review).toEqual(review);
    });
  });

  describe('filter', () => {
    it('exports a filter function', () => {
      expect(typeof filter).toEqual('function');
    });

    it('returns an action with type "FILTER"', () => {
      let action = filter();
      expect(typeof action).toEqual('object');
      expect(action.type).toEqual("FILTER");
    });

    it('takes in a query and sets it as action\'s query property', () => {
      let query = "fakequery";
      let action = filter(query);
      expect(action.query).toEqual(query);
    });
  });

});
