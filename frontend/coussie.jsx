import configureStore from './store/store';
import { receiveCurrentUser } from './actions/session_actions'; //for testing
import { logIn } from './util/session_api_util';//for testing
import Root from './components/root';
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // window.store = store;//for testing
  // window.receiveCurrentUser = receiveCurrentUser;//for testing
  // window.logIn = logIn;//for testing
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
