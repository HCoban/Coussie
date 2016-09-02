import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import RestaurantIndexContainer from './restaurant/index_container';
import * as RestaurantActions from '../actions/restaurant_actions';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.requestAllRestaurantsOnEnter = this.requestAllRestaurantsOnEnter.bind(this);
  }

  requestAllRestaurantsOnEnter () {
    this.props.dispatch(RestaurantActions.requestAllRestaurants());
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={RestaurantIndexContainer} onEnter={this.requestAllRestaurantsOnEnter}/>
          <Route path="/signup" component={AuthFormContainer} />
          <Route path="/login" component={AuthFormContainer} />
          <Route path="/restaurants" component={RestaurantIndexContainer} onEnter={this.requestAllRestaurantsOnEnter}/>
          <Route path="/about" component={AuthFormContainer} />
          <Route path="/credits" component={AuthFormContainer} />
          <Route path="/acknowledgements" component={AuthFormContainer} />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
