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
    // console.log("🚀 ~ file: ButtonSendPairs.jsx:45 ~ ButtonSendPairs ~ group!!!!!!!!!!!>>>>", group)

    const myGroup = group[0]?.Users;
    // group[0] !== undefined ? group[0].Users : [{login: "testLogin"}, {login: "testLogin2"}, {login: "testLogin3"}, {login: "testLogin4"}, {login: "testLogin5"}, {login: "testLogin6"}];
  // console.log("🚀 ~ file: Pairs2.jsx:90 ~ Pairs2 ~ myGroup ", myGroup )

  const myGroupName = group[0]?.name;
  // console.log("🚀 ~ file: ButtonSendPairs.jsx:50 ~ ButtonSendPairs ~ myGroupName", myGroupName)


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
        console.log("=====>>>>>>>> getArr", getArr)
          // if (getArr && myGroupName) {
            // console.log("🚀 ~ file: ButtonSendPairs.jsx:60 ~ ButtonSendPairs ~ getArr", getArr)
          
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
              console.log();
              const data = await response.json();
              const arrBack = JSON.parse(data.data);
              dispatch(initPairsAC())
              // console.log("🚀 ~ file: Pairs2.jsx:134 ~ putCurrentArr ~ arrBack", arrBack)
        // }
      };
      
      
      const handleClick = () => {
        putCurrentArr();
        dispatch(initPairsAC());
        console.log("HELLO");
      }

    //   React.useEffect(() => {
    //     dispatch(initGroupAC());
    // }, []);

  return (
        <Button size="small" onClick={() => {handleClick()}}>
          Создать пары
        </Button>
  );
}