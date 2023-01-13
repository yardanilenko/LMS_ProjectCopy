import {INIT_PAIR, INIT_ARRAY_PAIR} from "./actionsTypes";

export const initPairsAC = () => async (dispatch) => {
    try {
        const response = await fetch(`/arrayPairs`);
        const pair = await response.json();
        console.log("🚀 ~ file: actionsCreators.js:8 ~ +++>>>", pair)
        dispatch({type: INIT_PAIR, payload: pair});        
    } catch (error) {
        console.log(error)
    }

};

// export const initArrayPairsAC = (id, myGroup) => async (dispatch) => {
//     console.log("🚀 ~ file: actionsCreators.js:15 ~ initArrayPairsAC ~ myGroup", myGroup)
//     try {
//         const response = await fetch(
//             `/arrayPairs/${id}`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     myGroup,
//                 }),
//             }
//         )
//         const array = await response.json();
//         dispatch({type: INIT_ARRAY_PAIR, payload: array});        
//     } catch (error) {
//         console.log(error)
//     }

// };


// export const initPairsAC = (id) => async (dispatch) => {
//     try {
//         const response = await fetch(`/groups/${id}`);
//         const group = await response.json();
//         dispatch({type: INIT_PAIR, payload: group});        
//     } catch (error) {
//         console.log(error)
//     }

// };