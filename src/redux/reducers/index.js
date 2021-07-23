import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AppSettingReducer from './AppSettingReducer';


export default combineReducers({
    auth: AuthReducer,
    appsettings: AppSettingReducer,
});