import {INIT_MATERIAL} from "./actionsTypes";

export const initMaterialsAC = () => async (dispatch) => {
    try {
        const response = await fetch("/groups");
        const materials = await response.json();
        dispatch({type: INIT_MATERIAL, payload: materials});        
    } catch (error) {
        console.log(error)
    }

};