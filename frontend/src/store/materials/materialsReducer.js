import {INIT_MATERIAL} from "./actionsTypes";

const initialState = [];
export default function materialsReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_MATERIAL : {
            return action.payload;
        }
        default :
            return state
    }
}
