import { SET_AUTHENTICATION_STATUS, SAVE_TOKENS } from "../types/index";
///Authentication Reducer //

const INITIAL_STATE = {
    isAuthenticated: false,
    userDetails: {},
    tokens: {
        access: "",
        refresh: ""
    }
    //extra data to be added here
};

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_AUTHENTICATION_STATUS:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
            };
            break;
        case SAVE_TOKENS:
            return {
                ...state,
                tokens: action.payload.isAuthenticated,
            };
            break;
        default:
            return state;
            break;
    }
};

export default AuthReducer;
