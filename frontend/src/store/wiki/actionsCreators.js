import {INIT_WIKI} from "./actionsTypes";

export const initWikiAC = () => async (dispatch) => {
    try {
        const response = await fetch("/wiki");
        const wiki = await response.json();
        dispatch({type: INIT_WIKI, payload: wiki});        
    } catch (error) {
        console.log(error)
    }

};