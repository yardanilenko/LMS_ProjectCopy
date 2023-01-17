import {INIT_GROUPS} from "./actionsTypes";

const initialState = [];
export default function groupsReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_GROUPS : {
            return action.payload;
        }
        default :
            return state
    }
}
