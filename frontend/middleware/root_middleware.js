import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RestaurantMiddleware from './restaurant_middleware';
import CategoryMiddleware from './category_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RestaurantMiddleware,
  CategoryMiddleware
);

export default RootMiddleware;
