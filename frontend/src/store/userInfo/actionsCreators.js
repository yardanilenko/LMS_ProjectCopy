import {INIT_USER_INFO} from "./actionsTypes";

export const initUserInfoAC = (id) => async (dispatch) => {
    // console.log("🚀 ~ file: actionsCreators.js:4 ~ initGroupAC ~ id", id)
    try {
        const response = await fetch(`/groupsnames/${id}`);
        const userInfo = await response.json();
        const allUsersInfo = userInfo[0]?.UserInfos;
        // console.log("🚀 ~ file: actionsCreators.js:8 ~ initUserInfoAC ~ userInfo", allUsersInfo)
        dispatch({type: INIT_USER_INFO, payload: allUsersInfo});        
    } catch (error) {
        console.log(error)
    }

};