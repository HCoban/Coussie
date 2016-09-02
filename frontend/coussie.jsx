import configureStore from './store/store';
import { receiveCurrentUser } from './actions/session_actions'; //for testing
import { logIn } from './util/session_api_util';//for testing
import Root from './components/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllRestaurants } from './util/restaurant_util';//testing

document.addEventListener("DOMContentLoaded", () => {
  let store;
    if (window.currentUser) {
      const preloadedState = {session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
  window.store = store;//for testing
  window.fetchAllRestaurants = fetchAllRestaurants;
  // window.receiveCurrentUser = receiveCurrentUser;//for testing
  // window.logIn = logIn;//for testing
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
