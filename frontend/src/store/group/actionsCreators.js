import {INIT_GROUP} from "./actionsTypes";

export const initGroupAC = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/groups/${id}`);
        const group = await response.json();
        dispatch({type: INIT_GROUP, payload: group});        
    } catch (error) {
        console.log(error)
    }

};