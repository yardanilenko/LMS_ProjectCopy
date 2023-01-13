import {INIT_GROUP} from "./actionsTypes";

const initialState = [];
export default function groupReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_GROUP : {
            return action.payload;
        }
        default :
            return state
    }
}
