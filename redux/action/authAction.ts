import { LOGIN_USER, LOGOUT_USER } from "../action-types/authActionType";

const setAuthData = (payload: any) => {
  return { type: LOGIN_USER, payload };
};

const resetAuthData = (payload: any) => {
  return { type: LOGOUT_USER, payload };
};

export const AUTH_ACTIONS = {
  setAuthData: setAuthData,
  resetAuthData: resetAuthData,
};
