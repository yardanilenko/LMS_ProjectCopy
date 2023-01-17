import {INIT_VIKI} from "./actionsTypes";

const initialState = 'loading';
export default function groupsReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_VIKI : {
            return action.payload;
        }
        default :
            return state
    }
}
