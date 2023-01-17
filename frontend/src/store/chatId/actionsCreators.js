import * as types from "./actionsTypes";

export function setChatIdAC (id)  {
    return {type: types.SET_CHAT_ID, payload: id}
}
