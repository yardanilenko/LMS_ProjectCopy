import {INIT_GROUP} from "./actionsTypes";

export const initGroupAC = (id) => async (dispatch) => {
    console.log("🚀 ~ file: actionsCreators.js:4 ~ initGroupAC ~ id", id)
    try {
        const response = await fetch(`/groups/${id}`);
        const group = await response.json();
        console.log("🚀 ~ file: actionsCreators.js:8 ~ initGroupAC ~ response", response)
        dispatch({type: INIT_GROUP, payload: group});        
    } catch (error) {
        console.log(error)
    }

};