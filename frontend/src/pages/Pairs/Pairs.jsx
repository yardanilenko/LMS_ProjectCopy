import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ShowPairs from '../../components/showPairs/showPairs';
import ButtonSendPairs from '../../components/buttonSendPairs/ButtonSendPairs';
import { initPairsAC } from '../../store/pairs/actionsCreators';



function Pairs() {
  const dispatch = useDispatch();

  const getUserRole = useSelector((store) => store.profile);
  const userRole = getUserRole.userRole;
//   console.log("🚀 &&&&&?????? userRole", userRole)

  useEffect(() => {
    dispatch(initPairsAC());
}, []);

    return (
        <>
        { 
        userRole === 'teacher' ? (
            <>
            <ShowPairs/>
            <ButtonSendPairs />
            </>
        ) : (
            <>
            <ShowPairs/>
            </>           
        )
        }
        </>
    );
}

export default Pairs;