import {SET_CHAT_ID} from "./actionsTypes";

const initialState = null;
export default function chatIdReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CHAT_ID : {
            return action.payload;
        }
        default :
            return state
    }
}
