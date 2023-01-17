import {INIT_VIKI} from "./actionsTypes";

export const initVikiAC = () => async (dispatch) => {
    try {
        const response = await fetch("/viki");
        const viki = await response.json();
        dispatch({type: INIT_VIKI, payload: viki});        
    } catch (error) {
        console.log(error)
    }

};