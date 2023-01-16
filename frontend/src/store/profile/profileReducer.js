import {SET_USERNAME} from "./actionsTypes";

const initialState = {
    userName: localStorage.getItem("userName") || "",
    userId: localStorage.getItem("userId" || ""),
    userRole: localStorage.getItem("userRole" || "")
}
export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME : {
            return action.payload;
        }
        default :
            return state
    }
}
