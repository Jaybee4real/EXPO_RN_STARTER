//conatins all actions dispatchable by redux //

import {
  SET_AUTHENTICATION_STATUS,
  SET_APP_COLOR_SCHEME,
} from "../types/index";

export const setAuthenticationStatus = (data) => {
  return {
    type: SET_AUTHENTICATION_STATUS,
    payload: data,
  };
};

export const setAppColorScheme = (value) => {
  return {
    type: SET_APP_COLOR_SCHEME,
    payload: value,
  };
};
