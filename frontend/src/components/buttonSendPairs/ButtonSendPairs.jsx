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

    const myGroup = group[0]?.Users;

    const myGroupName = group[0]?.name;


    const getMyPairs = () => {
      if (group.length) {
        let myArrPairs = [];
        for (let index = 0; index < 12; index++) {
          let row = getPairs(myGroup);
          myArrPairs.push(row)
        }
        return myArrPairs;
      }
      }
    
      
      const putCurrentArr = async () => {
        
        const getArr = getMyPairs();

          
          const response = await fetch(
            `http://localhost:3100/pairs`,
              {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                      data: getArr?.length ? getArr : [],
                      group_id: id,
                      group_name: myGroupName || "TestName",
                  }),
              }
              )
              dispatch(initPairsAC())
      };
      
      
      const handleClick = () => {
        putCurrentArr();
        dispatch(initPairsAC());
      }

      React.useEffect(() => {
        dispatch(initGroupAC(id));
        dispatch(initPairsAC());
      }, []);

  return (
        <Button size="small" onClick={() => {handleClick()}}>
          Создать пары
        </Button>
  );
}