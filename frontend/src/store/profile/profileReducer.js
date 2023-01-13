import {SET_USERNAME} from "./actionsTypes";

const initialState = localStorage.getItem("userName") || "";
export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME : {
            return action.payload;
        }
        default :
            return state
    }
}
