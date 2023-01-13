import {combineReducers} from 'redux';
import groupsReducer from "./groups/groupsReducer";
import groupReducer from "./group/groupReducer";
import profileReducer from "./profile/profileReducer";

export default combineReducers({
    groups: groupsReducer,
    group: groupReducer,
    profile: profileReducer,
});
