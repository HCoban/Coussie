import { SessionConstants, receiveErrors, receiveCurrentUser } from '../actions/session_actions';
import { signUp, logIn, logOut } from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch }) => next => action => {
  const successCallback = (user) => (dispatch(receiveCurrentUser(user)));
  const errorCallback = (xhr) => (dispatch(receiveErrors(xhr.responseJSON)));

  switch (action.type) {
    case SessionConstants.LOGIN:
      logIn(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logOut(() => (next));
      break;
    case SessionConstants.SIGNUP:
      signUp(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
