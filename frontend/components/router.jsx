import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/signup" component={AuthFormContainer} />
        <Route path="/login" component={AuthFormContainer} />
      </Router>
    );
  }
}

export default AppRouter;
