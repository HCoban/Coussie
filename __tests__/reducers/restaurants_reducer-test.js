import RestaurantReducer from '../../frontend/reducers/restaurant_reducer';
import { createStore } from 'redux';
import {
  RECEIVE_ALL_RESTAURANTS,
  RECEIVE_SINGLE_RESTAURANT,
  RECEIVE_SINGLE_CATEGORY,
  DELETE_SINGLE_REVIEW
} from '../../frontend/actions/restaurant_actions';

describe('RestaurantReducer', () => {

  it('exports a RestaurantReducer function', () => {
    expect(typeof RestaurantReducer).toEqual('function');
  });

  it('should initialize with an empty object as the default state', () => {
    expect(RestaurantReducer(undefined, {})).toEqual({});
  });

  it('should return the previous state if an action is not matched', () => {
    const oldState = { 1: 'oldState' };
    const newState = RestaurantReducer(oldState, {type: "UNMATCHED_TYPE"});
    expect(newState).toEqual(oldState);
  });

  describe('handling the "RECEIVE_ALL_RESTAURANTS" action', () => {
    let action;
    let fakeRestaurants;

    beforeEach(() => {
      fakeRestaurants = { 1: "fakeRestaurant 1", 2: "fakeRestaurant 2" };
      action = { type: "RECEIVE_ALL_RESTAURANTS", restaurants: fakeRestaurants };
    });

    it('should replace the state with the action\'s restaurants', () => {
      const state = RestaurantReducer(undefined, action);
      expect(state).toEqual(fakeRestaurants);
    });

    it('should not modify the old state', () => {
      let oldState = {1: "fakeRestaurant 5"};
      RestaurantReducer(oldState, action);
      expect(oldState).toEqual({1: "fakeRestaurant 5"});
    });
  });

  describe('handling the "RECEIVE_SINGLE_RESTAURANT"action', () => {
    let action;
    let fakeRestaurant;

    beforeEach(() => {
      fakeRestaurant = { 1: { name: "fakeRestaurant" } };
      action = { type: "RECEIVE_SINGLE_RESTAURANT", restaurant: fakeRestaurant };
    });

    it('should add the restaurant to the state using the id as key', () => {
      let state = RestaurantReducer({ id: 1 }, action);
      expect(state[1]).toEqual(fakeRestaurant[1]);
    });

    it('should not effect other restaurants in the state', () => {
      let oldState = { 2: { name: "fakeOldRestaurant" }, 1: { name: "fakeOldRestaurant2" } };
      let state = RestaurantReducer(oldState, action);
      expect(oldState[2]).toEqual({name: "fakeOldRestaurant"});
    });
  });

  describe('handling the "DELETE_SINGLE_REVIEW" action', () =>{
    let action;
    let fakeReview;

    beforeEach(() => {
      fakeReview = {
        restaurant_id: 1,
        review_id: 4,
        vote: 5,
        description: "nice"
      };
      action = { type: "DELETE_SINGLE_REVIEW", review: fakeReview };
    });

    it('should remove the correct review from the state', () => {
      let state = RestaurantReducer(
        {
          1: {
            reviews: {
              4: {
                description: "nice"
              }
            }
          }
        }, action
      );

      expect(typeof state[1]["reviews"][4]).toEqual('undefined');
    });

    it('should not affect the other reviews in the state', () => {
      let state = RestaurantReducer(
        {
          1: {
            reviews: {
              3: {
                description: "not to be removed"
              },
              4: {
                description: "nice"
              }
            }
          }
        }, action
      );

      expect(state[1]["reviews"][3]).toEqual({description: "not to be removed"});
    });

  });

  describe('handling the "RECEIVE_SINGLE_CATEGORY" action', () => {
    let action;
    let fakeCategory;

    beforeEach(() => {
      fakeCategory = {
        1: "restaurant1",
        2: "restaurant2"
      };

      action = {
        type: "RECEIVE_SINGLE_CATEGORY",
        restaurants: fakeCategory
      };
    });

    it('should filter the restaurants belonging to other categories out', () => {
      let oldState = {
        1: "restaurant1",
        2: "restaurant2",
        3: "restaurant3"
      };

      let state = RestaurantReducer(oldState, action);

      expect(typeof state[3]).toEqual('undefined');
    });
  });
});
