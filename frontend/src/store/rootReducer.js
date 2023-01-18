import {combineReducers} from 'redux';
import groupsReducer from "./groups/groupsReducer";
import groupReducer from "./group/groupReducer";
import pairsReducer from "./pairs/pairsReducer";
import profileReducer from "./profile/profileReducer";
import chatIdReducer from "./chatId/chatIdReducer";
import chatsReducer from "./chats/chatsReducer";
import groupChatsReducer from "./groupChats/groupChatsReducer";
import materialsReducer from "./materials/materialsReducer";
import userInfoReducer from "./userInfo/userInfoReducer";
import wikiReducer from "./wiki/wikiReducer";


export default combineReducers({
    groups: groupsReducer,
    group: groupReducer,
    pair: pairsReducer,
    profile: profileReducer,
    materials: materialsReducer,
    chatId: chatIdReducer,
    chats: chatsReducer,
    groupChats: groupChatsReducer,
    userInfo: userInfoReducer,
    wiki: wikiReducer
});
