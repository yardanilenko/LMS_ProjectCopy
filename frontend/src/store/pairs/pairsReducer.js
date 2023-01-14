import {INIT_PAIR} from "./actionsTypes";

const initialState = [];
export default function pairsReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_PAIR : {
            return action.payload;
        }
        default :
            return state
    }
}
