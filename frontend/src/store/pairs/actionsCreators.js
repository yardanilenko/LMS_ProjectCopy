import {INIT_PAIR } from "./actionsTypes";

export const initPairsAC = () => async (dispatch) => {
    // console.log("🚀 ~ file: actionsCreators.js:4 ~ initPairsAC ~ dispatch", dispatch)
    try {
        const response = await fetch(`/pairs`);
        const pair = await response.json();
        // console.log("🚀 ~ file: actionsCreators.js:7 ~ initPairsAC ~ pair!!!!!", pair)
        dispatch({type: INIT_PAIR, payload: pair});        
    } catch (error) {
        console.log(error)
    }

};

