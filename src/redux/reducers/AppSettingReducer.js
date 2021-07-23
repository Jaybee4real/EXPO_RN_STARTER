import { SET_APP_COLOR_SCHEME } from "../types/index";

const INITIAL_STATE = {
  colortheme: "light",
  //other data can be added later
};

const AppSettingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_APP_COLOR_SCHEME:
      return { ...state, colortheme: action.payload };
      break;
    default:
      return state;
      break;
  }
};

export default AppSettingReducer;
