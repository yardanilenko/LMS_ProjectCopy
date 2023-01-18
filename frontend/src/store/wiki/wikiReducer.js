import {INIT_WIKI} from "./actionsTypes";

const initialState = [{page: "# Hello, *world*!"}];
export default function wikiReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_WIKI : {
            return action.payload;
        }
        default :
            return state
    }
}
