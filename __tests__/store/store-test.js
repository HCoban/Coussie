import configureStore from '../../frontend/store/store';
jest.mock('redux');

describe('Store', () => {
  let createStore,
      RootReducer,
      RootMiddleware;

  beforeEach(() => {
    createStore = require('redux').createStore;
    RootReducer = require('../../frontend/reducers/root_reducer');
    RootMiddleware = require('../../frontend/middleware/root_middleware');
  });

  it('should export a configureStore function', () => {
    expect(typeof configureStore).toEqual('function');
  });

  it('should create a store', () => {
    configureStore();
    expect(createStore).toBeCalled();
  });
});
