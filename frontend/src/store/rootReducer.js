import {combineReducers} from 'redux';
import groupsReducer from "./groups/groupsReducer";
import groupReducer from "./group/groupReducer";
import pairsReducer from "./pairs/pairsReducer";
import profileReducer from "./profile/profileReducer";
import materialsReducer from "./materials/materialsReducer";
import userInfoReducer from "./userInfo/userInfoReducer";
import wikiReducer from "./wiki/wikiReducer";


export default combineReducers({
    groups: groupsReducer,
    group: groupReducer,
    pair: pairsReducer,
    profile: profileReducer,
    materials: materialsReducer,
    userInfo: userInfoReducer,
    wiki: wikiReducer
});
