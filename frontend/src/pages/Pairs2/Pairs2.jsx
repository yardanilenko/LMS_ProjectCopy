import React, { useCallback } from 'react';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import ShowPairs from '../../components/showPairs/showPairs';
import ButtonSendPairs from '../../components/buttonSendPairs/ButtonSendPairs';
import { initPairsAC } from '../../store/pairs/actionsCreators';



function Pairs2() {
  const dispatch = useDispatch();

  const userRole = localStorage.getItem('userRole');;
  console.log("🚀 ~ file: Pairs2.jsx:14 ~ Pairs2 ~ userRole", userRole)

  // const thisHandleClick = useCallback(
  //     () => {
  //       dispatch(initPairsAC());
  //     },
  //     [],
  //   )
    
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

export default Pairs2;