import {INIT_CHATS} from "./actionsTypes";

const initialState = [];
export default function chatIdReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_CHATS : {
            return action.payload;
        }
        default :
            return state
    }
}
