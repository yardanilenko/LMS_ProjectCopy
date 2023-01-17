import {INIT_PAIR } from "./actionsTypes";

export const initPairsAC = () => async (dispatch) => {

    try {
        const response = await fetch(`/pairs`);
        const pair = await response.json();
        dispatch({type: INIT_PAIR, payload: pair});        
    } catch (error) {
        console.log(error)
    }

};

