import React from 'react';
import { Router, Route, hashHistory } from 'react-redux';
import App from './app';

class AppRouter extends React.Component {


  render() {
    return (
      // <Router history={hashHistory}>
      //   <Route path="/" component={App} />
      // </Router>
      <App />
    );
  }
}

export default AppRouter;
