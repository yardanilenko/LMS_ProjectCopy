import {SET_USERNAME} from "./actionsTypes";

export function setUsernameAC (name)  {
    return {type: SET_USERNAME, payload: name}
}
