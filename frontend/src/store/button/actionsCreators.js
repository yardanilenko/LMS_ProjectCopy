import {INIT_BUTTON } from "./actionsTypes";

export const initButtonAC = ({getArr, id}) => async (dispatch) => {
    try {
        const response = await fetch(`/pairs`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: getArr,
                group_id: id
            }),
        }
        )
        console.log();
        const data = await response.json();
        dispatch({type: INIT_BUTTON, payload: data});        
    } catch (error) {
        console.log(error)
    }

};