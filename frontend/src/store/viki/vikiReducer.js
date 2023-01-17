import {INIT_VIKI} from "./actionsTypes";

const initialState = [{page: "Elbrus Viki"}];
export default function vikiReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_VIKI : {
            return action.payload;
        }
        default :
            return state
    }
}
