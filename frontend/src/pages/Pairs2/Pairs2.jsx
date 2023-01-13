import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BackButton from '../../components/backButton/BackButton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { initGroupAC } from '../../store/group/actionsCreators';
import { initPairsAC } from '../../store/pairs/actionsCreators';
import { useState } from 'react';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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

export default function Pairs2() {
  const dispatch = useDispatch();

  const {id} = useParams();
  
  const group = useSelector((store) => store.group);
  // const pairs = useSelector((store) => store.pairs);

  React.useEffect(() => {
    dispatch(initGroupAC(id));
    // dispatch(initPairsAC(id));
}, []);

  // console.log("🚀 ~ file: Pairs2.jsx:75 ~ Pairs2 ~ pairs", pairs)
  

  function createData(week1, week2, week3, week4) {
    return { week1, week2, week3, week4 };
  }
  
  const myGroup = group[0] !== undefined ? group[0].Users : [{login: "testLogin"}, {login: "testLogin2"}, {login: "testLogin3"}, {login: "testLogin4"}, {login: "testLogin5"}, {login: "testLogin6"}];
  console.log("🚀 ~ file: Pairs2.jsx:90 ~ Pairs2 ~ myGroup ", myGroup )

const getfirstRowsArr = () => {
  const phrase = 'Расписание ещё не составлено';
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
  let firstRows = [];
  for (let i = 0; i < 10; i++) {
      firstRows = [
        createData(days[0], days[0], days[0], days[0]),
        createData(phrase, phrase, phrase, phrase),
        createData(days[1], days[1], days[1], days[1]),
        createData(phrase, phrase, phrase, phrase),
        createData(days[2], days[2], days[2], days[2]),
        createData(phrase, phrase, phrase, phrase),
        createData(days[3], days[3], days[3], days[3]),
        createData(phrase, phrase, phrase, phrase),
        createData(days[4], days[4], days[4], days[4]),
        createData(phrase, phrase, phrase, phrase),
      ];
  }
return firstRows;
}

const initialState = getfirstRowsArr();

const[rows, setRows] = useState([])

const[myData, setData] = useState([])

  const getMyPairs = () => {
    let myArrPairs = [];
    for (let index = 0; index < 12; index++) {
      let row = getPairs(myGroup);
      myArrPairs.push(row)
    }
    return myArrPairs;
  }

  const getArr = getMyPairs();

  const getRowUl = (row) => {
    let ul = <ul>{row.map((el) => <li>{el.join('-')}</li> )}</ul>;
    return ul;
  }

const getRowsArr = () => {
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
  let myRows = [];
    myRows = [
  createData(days[0], days[0], days[0], days[0]),
  createData(getRowUl(getArr[0]), getRowUl(getArr[1]), getRowUl(getArr[2]), getRowUl(getArr[3])),
  createData(days[1], days[1], days[1], days[1]),
  createData(getRowUl(getArr[4]), getRowUl(getArr[5]), getRowUl(getArr[6]), getRowUl(getArr[7])),
  createData(days[2], days[2], days[2], days[2]),
  createData('Solo', 'Solo', 'Solo', 'Solo'),
  createData(days[3], days[3], days[3], days[3]),
  createData('Solo', 'Solo', 'Solo', 'Solo'),
  createData(days[4], days[4], days[4], days[4]),
  createData(getRowUl(getArr[8]), getRowUl(getArr[9]), getRowUl(getArr[10]), getRowUl(getArr[11])),
];
return myRows;
}

const myArray = getRowsArr();
console.log("🚀 ~ file: Pairs2.jsx:144 ~ Pairs2 ~ myArray", myArray)

const putCurrentArr = async () => {

  if (group[0] !== undefined) {
    const response = await fetch(
      `http://localhost:3100/arrayPairs`,
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
        console.log("🚀 ~ file: Pairs2.jsx:134 ~ putCurrentArr ~ arrBack", arrBack)
        setData(arrBack);
  }
};

console.log("-------", getRowsArr());


const handleClick = () => {
  putCurrentArr();
  setRows(myArray);
}


  return (
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow style={{ display: 'flex', alignItems: 'center', width: "100%", minHeight: "50px"}}>
            <div>
              <BackButton/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#44014C", width: "100%", minHeight: "50px"}}>
              <div style={{ backgroundColor: "#44014C"}} align="center"><h1>Hello</h1></div>
            </div>
          </TableRow >
          <TableRow>
            <StyledTableCell style={{ backgroundColor: "#44014C"}}>Неделя 1</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#44014C"}} align="left">Неделя 2</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#44014C"}} align="center">Неделя 3</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#44014C"}} align="right">Неделя 4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.week1}>
              <StyledTableCell component="th" scope="row">
                {row.week1}
              </StyledTableCell>
              <StyledTableCell align="left">{row.week2}</StyledTableCell>
              <StyledTableCell align="center">{row.week3}</StyledTableCell>
              <StyledTableCell align="right">{row.week4}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleClick}>Сгруппировать</Button>
    </TableContainer>
  );
}