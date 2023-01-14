import React from 'react';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import ShowPairs from '../../components/showPairs/showPairs';
import ButtonSendPairs from '../../components/buttonSendPairs/ButtonSendPairs';
import { initPairsAC } from '../../store/pairs/actionsCreators';



function Pairs2() {
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(initPairsAC());
// }, []);
    return (
        <>
            <ShowPairs/>
            <ButtonSendPairs/>
        </>
    );
}

export default Pairs2;