import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantReducer from './restaurant_reducer';
import CategoryReducer from './category_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer,
  categories: CategoryReducer
});

export default RootReducer;
