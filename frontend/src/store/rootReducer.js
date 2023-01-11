import {combineReducers} from 'redux';
import groupsReducer from "./groups/groupsReducer";
import groupReducer from "./group/groupReducer";

export default combineReducers({
    groups: groupsReducer,
    group: groupReducer
});
