import {INIT_GROUPS} from "./actionsTypes";

export const initGroupsAC = () => async (dispatch) => {
    try {
        const response = await fetch("/groups");
        const groups = await response.json();
        dispatch({type: INIT_GROUPS, payload: groups});        
    } catch (error) {
        console.log(error)
    }

};