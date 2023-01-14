import {INIT_BUTTON} from "./actionsTypes";

const initialState = [];
export default function buttonReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_BUTTON : {
            return action.payload;
        }
        default :
            return state
    }
}
