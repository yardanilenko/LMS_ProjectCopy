import {INIT_USER_INFO} from "./actionsTypes";

const initialState = [];
export default function groupReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_USER_INFO : {
            return action.payload;
        }
        default :
            return state
    }
}
