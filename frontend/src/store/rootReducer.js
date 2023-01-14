import {combineReducers} from 'redux';
import groupsReducer from "./groups/groupsReducer";
import groupReducer from "./group/groupReducer";
import pairsReducer from "./pairs/pairsReducer";
import buttonReducer from "./button/buttonReducer";
import profileReducer from "./profile/profileReducer";


export default combineReducers({
    groups: groupsReducer,
    group: groupReducer,
    pair: pairsReducer,
    button: buttonReducer,
    profile: profileReducer,
});
