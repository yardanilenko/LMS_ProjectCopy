import {INIT_GROUP_CHATS} from "./actionsTypes";

export const initGroupChatsAC = () => async (dispatch) => {
    try {
        const response = await  fetch('/api/groupChats');
        const groupChats = await response.json();
        dispatch({type: INIT_GROUP_CHATS, payload: groupChats.rooms});
    } catch (error) {
        console.log(error)
    }

};
