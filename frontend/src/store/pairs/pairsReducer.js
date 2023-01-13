import {INIT_PAIR, INIT_ARRAY_PAIR } from "./actionsTypes";

const initialState = [];
export default function pairsReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_PAIR : {
            return action.payload;
        }
        case INIT_ARRAY_PAIR : {
            return action.payload;
        }
        default :
            return state
    }
}
