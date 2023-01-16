import React from 'react';
import {Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUsernameAC} from "../../store/profile/actionsCreators";
import {useEffect} from "react";

function Logout() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(() => {
            localStorage.removeItem('userName');
            localStorage.removeItem('userId');
            localStorage.removeItem("userRole")
            dispatch(setUsernameAC({}));
        });
    }, []);






    return (
        <Navigate to="/login" />
    );
}

export default Logout;
