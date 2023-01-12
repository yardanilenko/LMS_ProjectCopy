import {INIT_GROUP, INIT_ID_GROUP} from "./actionsTypes";

const initialState = [];
export default function catsReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_GROUP : {
            return action.payload;
        }
        default :
            return state
    }
}
