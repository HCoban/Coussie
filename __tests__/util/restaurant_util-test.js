import {
  fetchAllRestaurants,
  createReview,
  editReview,
  deleteReview,
  fetchFilteredRestaurants,
  fetchSingleRestaurant
} from '../../frontend/util/restaurant_util';

describe('restaurant_util', () => {
  let mockSuccessCallback;

  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    mockSuccessCallback = jest.fn(() => 'mock success');
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  describe('fetchAllRestaurants', () => {

    it('makes an ajax request that fetches restaurants', () => {
      fetchAllRestaurants(mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      expect(ajaxCallArg.url).toEqual('api/restaurants');
    });

    it('triggers the success callback', () => {
      fetchAllRestaurants(mockSuccessCallback);

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });

  });

  describe('fetchSingleRestaurant', () => {

    it('makes an ajax request that fetches a restaurant', () => {
      fetchSingleRestaurant(1, mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      expect(ajaxCallArg.url).toEqual('api/restaurants/1');
    });

    it('triggers the success callback', () => {
      fetchSingleRestaurant(1, mockSuccessCallback);

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });

  });

  describe('fetchFilteredRestaurants', () => {

    it('makes an ajax request that fetches filtered restaurants', () => {
      let query = { query: "Greek" };
      fetchFilteredRestaurants(query, mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      expect(ajaxCallArg.url).toEqual('api/restaurants');
      expect(ajaxCallArg.data).toEqual(query);
    });

    it('triggers the success callback', () => {
      let query = { query: "Greek" };
      fetchFilteredRestaurants(query, mockSuccessCallback);

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });

  });

  describe('createReview', () => {

    it('makes an ajax request that creates a review', () => {
      let review = { restaurant_id: 1, vote: 4, description: "dummy" };
      createReview({ review }, mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      expect(ajaxCallArg.url).toEqual('api/reviews');
      expect(ajaxCallArg.type || ajaxCallArg.method).toMatch('POST');
      expect(ajaxCallArg.data).toEqual({review});
    });

    it('triggers the success callback', () => {
      let review = { restaurant_id: 1, vote: 4, description: "dummy" };
      createReview({ review }, mockSuccessCallback);

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });

  });

  describe('editReview', () => {

    it('makes an ajax request that edits a review', () => {
      let review = { id: 1, restaurant_id: 1, vote: 1, description: "dummy" };
      editReview({ review }, mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      expect(ajaxCallArg.url).toEqual('api/reviews/1');
      expect(ajaxCallArg.type || ajaxCallArg.method).toMatch('PATCH');
      expect(ajaxCallArg.data).toEqual({review});
    });

    it('triggers the success callback', () => {
      let review = { id: 1, restaurant_id: 1, vote: 1, description: "dummy" };
      editReview({ review }, mockSuccessCallback);

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });

  });

  describe('deleteReview', () => {

    it('makes an ajax request that deletes a review', () => {
      deleteReview(1, mockSuccessCallback);
      expect($.ajax).toBeCalled();

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });

    it('triggers the success callback', () => {
      deleteReview(1, mockSuccessCallback);

      const ajaxCallArg = $.ajax.mock.calls[0][0];
      ajaxCallArg.success('dummy result');
      expect(mockSuccessCallback).toBeCalledWith('dummy result');
    });

  });

});
