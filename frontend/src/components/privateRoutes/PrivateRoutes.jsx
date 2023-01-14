import React from 'react';
import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoutes(props) {

    const profile = useSelector((store) => store.profile)

    if (!profile) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            {props.children}
        </>
    );
}

export default PrivateRoutes;
