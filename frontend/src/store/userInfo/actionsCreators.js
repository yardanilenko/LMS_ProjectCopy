import {INIT_USER_INFO} from "./actionsTypes";

export const initUserInfoAC = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/groupsnames/${id}`);
        const userInfo = await response.json();
        const allUsersInfo = userInfo[0]?.UserInfos;
        dispatch({type: INIT_USER_INFO, payload: allUsersInfo});        
    } catch (error) {
        console.log(error)
    }

};