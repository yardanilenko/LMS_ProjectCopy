import {combineReducers} from 'redux';
import groupsReducer from "./groups/groupsReducer";
import groupReducer from "./group/groupReducer";
import pairsReducer from "./pairs/pairsReducer";
import profileReducer from "./profile/profileReducer";
import materialsReducer from "./materials/materialsReducer";
import userInfoReducer from "./userInfo/userInfoReducer";
import chatIdReducer from "./chatId/chatIdReducer";
import chatsReducer from "./chats/chatsReducer";
import groupChatsReducer from "./groupChats/groupChatsReducer";


export default combineReducers({
    groups: groupsReducer,
    group: groupReducer,
    pair: pairsReducer,
    profile: profileReducer,
    materials: materialsReducer,
    userInfo: userInfoReducer,
    chatId: chatIdReducer,
    chats: chatsReducer,
    groupChats: groupChatsReducer,
});
