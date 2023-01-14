import {INIT_PAIR } from "./actionsTypes";

export const initPairsAC = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/pairs/${id}`);
        const pair = await response.json();
        // console.log("🚀 ~ file: actionsCreators.js:8 ~ +++>>>", pair.data)
        const myPairs = pair.data;
        dispatch({type: INIT_PAIR, payload: myPairs});        
    } catch (error) {
        console.log(error)
    }

};

