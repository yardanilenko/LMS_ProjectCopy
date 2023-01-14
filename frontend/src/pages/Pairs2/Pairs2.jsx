import React from 'react';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import ShowPairs from '../../components/showPairs/showPairs';
import ButtonSendPairs from '../../components/buttonSendPairs/ButtonSendPairs';
import { initPairsAC } from '../../store/pairs/actionsCreators';



function Pairs2() {
  const dispatch = useDispatch();

  const thisHandleClick = () => {
    dispatch(initPairsAC());
  }

  useEffect(() => {
    dispatch(initPairsAC());
}, []);
    return (
        <>
            <ShowPairs/>
            <ButtonSendPairs thisHandleClick={thisHandleClick}/>
        </>
    );
}

export default Pairs2;