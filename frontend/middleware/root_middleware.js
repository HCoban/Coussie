import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import RestaurantMiddleware from './restaurant_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  RestaurantMiddleware
);

export default RootMiddleware;
