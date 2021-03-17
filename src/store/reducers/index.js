import { combineReducers } from "redux";
import { settingsReducer } from './settingsReducer';
import { viewsReducer } from './viewsReducer';

export const mainReducer = combineReducers({
    settingsReducer,
    viewsReducer
});