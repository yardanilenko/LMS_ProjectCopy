import {combineReducers} from 'redux';
import groupsReducer from "./groups/groupsReducer";
import groupReducer from "./group/groupReducer";
import pairsReducer from "./pairs/pairsReducer";

export default combineReducers({
    groups: groupsReducer,
    group: groupReducer,
    pair: pairsReducer
});
