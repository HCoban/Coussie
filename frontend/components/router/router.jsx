import React from 'react';
import { Router, Route, hashHistory, IndexRoute, withRouter } from 'react-router';
import App from '../app';
import AuthFormContainer from '../auth_form/auth_form_container';
import RestaurantIndexContainer from '../restaurant/index_container';
import CategoryIndexContainer from '../category/index_container';
import * as RestaurantActions from '../../actions/restaurant_actions';
import * as CategoryActions from '../../actions/category_actions';
import RestaurantShowContainer from '../restaurant/show_container';
import Credits from '../credits/credits';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.requestData = this.requestData.bind(this);
    this.redirectIfLoggedOut = this.redirectIfLoggedOut.bind(this);
  }

  requestData () {
    this.context.store.dispatch(RestaurantActions.requestAllRestaurants());
    this.context.store.dispatch(CategoryActions.requestAllCategories());
  }

  redirectIfLoggedOut (nextState, replace) {
    if (!this.context.store.getState().session.currentUser) {
      replace("/login");
    }
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={this.requestData}>
          <IndexRoute components={{main: RestaurantIndexContainer, sidebar: CategoryIndexContainer}} onEnter={this.redirectIfLoggedOut}/>
          <Route path="/signup" component={AuthFormContainer} />
          <Route path="/login" component={AuthFormContainer} />
          <Route path="/restaurants" component={RestaurantIndexContainer} />
          <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
          <Route path="/credits" component={Credits} />
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = { store: React.PropTypes.object };

export default AppRouter;
