import {INIT_GROUPS, INIT_GROUP} from "./actionsTypes";

const initialState = [];
export default function groupsReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_GROUPS : {
            return action.payload;
        }
        case INIT_GROUP : {
            return action.payload;
        }
        default :
            return state
    }
}
