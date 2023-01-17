import {INIT_CHATS} from "./actionsTypes";

export const initChatsAC = () => async (dispatch) => {
    try {
        const response = await fetch('/api/chats');
        const chats = await response.json();
        dispatch({type: INIT_CHATS, payload: chats.chats});
    } catch (error) {
        console.log(error)
    }

};


