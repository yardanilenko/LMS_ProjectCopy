import React from 'react';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initGroupAC } from '../../store/group/actionsCreators';
import { initPairsAC } from '../../store/pairs/actionsCreators';

function getShuffledArr(array) {
    let result = [], source = array.concat([]);
  
    while (source.length) {
      let index = Math.floor((Math.random()-0.5) * source.length);
      result.push(source.splice(index, 1)[0]);
   }
  
    if(result === array){
        result.reverse();
    }
  
    return result;
  }
  
  function getPairs(arr){
      const res = getShuffledArr(arr)
      const pairs = [];
      for (let i = 0; i < res.length/2; i++) { 
        if(res.length % 2 === 0){
          pairs.push([res[2*i].login, res[2*i+1].login])
        } else {
          const popped = res.pop();
          pairs.push([res[2*i].login, res[2*i+1].login])
          pairs.at(-1).push(popped.login)
        }
      }
      return pairs;
  }

export default function ButtonSendPairs({thisHandleClick}) {

    const dispatch = useDispatch();

    const {id} = useParams();
    
    const group = useSelector((store) => store.group);

    const myGroup = group[0] !== undefined ? group[0].Users : [{login: "testLogin"}, {login: "testLogin2"}, {login: "testLogin3"}, {login: "testLogin4"}, {login: "testLogin5"}, {login: "testLogin6"}];
  // console.log("🚀 ~ file: Pairs2.jsx:90 ~ Pairs2 ~ myGroup ", myGroup )


    const getMyPairs = () => {
        let myArrPairs = [];
        for (let index = 0; index < 12; index++) {
          let row = getPairs(myGroup);
          myArrPairs.push(row)
        }
        return myArrPairs;
      }
    
      const getArr = getMyPairs();
      console.log("🚀 ~ file: ButtonSendPairs.jsx:59 ~ ButtonSendPairs ~ getArr", getArr)
      
      const putCurrentArr = async () => {
          
          if (group[0] !== undefined) {
            // console.log("🚀 ~ file: ButtonSendPairs.jsx:60 ~ ButtonSendPairs ~ getArr", getArr)
            
          const response = await fetch(
            `http://localhost:3100/pairs`,
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
              const arrBack = JSON.parse(data.data);
              // console.log("🚀 ~ file: Pairs2.jsx:134 ~ putCurrentArr ~ arrBack", arrBack)
        }
      };
      
      
      const handleClick = () => {
        putCurrentArr();
        console.log("HELLO");
      }

      React.useEffect(() => {
        dispatch(initGroupAC());
        dispatch(initPairsAC());
    }, []);

  return (
        <Button size="small" onClick={() => {handleClick(); thisHandleClick()}}>
          Создать пары
        </Button>
  );
}