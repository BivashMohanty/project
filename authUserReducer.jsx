import { AUTH_USER_ACTIONS } from '../actions/userAuthAction';

export const authUserReducer = (state, action) => {
  switch (action.type) {
    case AUTH_USER_ACTIONS.LOGIN:
      return { ...state, ...action.payload, isLoggedIn: true };
    case AUTH_USER_ACTIONS.LOGOUT:
      return { email: "", isLoggedIn: false };
    default:
      return state;
  }
};
