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


export default function Pairs() {
  const dispatch = useDispatch();

  const {id} = useParams();
  
  const group = useSelector((store) => store.group);
  console.log("🚀 ~ file: Pairs.jsx:42 ~ Pairs ~ group", group[0])

  

  function createData(week1, week2, week3, week4) {
    return { week1, week2, week3, week4 };
  }

  const nameGroup = group[0] !== undefined ? group[0].name : "testName";
  console.log("🚀 ~ file: Pairs.jsx:52 ~ Pairs ~ nameGroup", nameGroup)
  
  const myGroup = group[0] !== undefined ? group[0].Users : [[{login: "testLogin"}, {login: "testLogin2"}], [{login: "testLogin3"}, {login: "testLogin4"}], [{login: "testLogin5"}, {login: "testLogin6"}]];
  console.log("🚀 ~ file: Pairs.jsx:55 ~ Pairs ~ myGroup", myGroup)


function shuffle(arr){
 let j;
 for(var i = arr.length - 1; i > 0; i--){
 j = Math.floor(Math.random()*(i + 1));
 [arr[i], arr[j]] = [arr[j], arr[i]];
 }
 return arr;
}
const pairing = (list) => {
 let firsthalf = new Set();
 const indexes = Array.from({length: list
.length
}, (_, i) => i);
 while (firsthalf.size < (list.length % 2 ? 
Math
.floor(list.length /2) + 1 : list.length / 2
)) {
 firsthalf.add(Math.floor(Math.random() * (
list
.length - 0.5)));
 }
 let secondhalf = indexes.filter(ind => {
 if ([...firsthalf.keys()].some(el => ind === el)) return false;
 return true;
 });
 firsthalf = shuffle([...firsthalf.keys()]);
 secondhalf = shuffle(secondhalf);
 let res = [];
 firsthalf.forEach((ind, i) => {
 if (i < secondhalf.length) {
 res.push([list[ind], list[secondhalf[i]]])
 } else {
 const l = Math.floor(Math.random() * (firsthalf.length - 1));
 console.log('===', l);
 res[l].push(list[ind]);
 }
 });
 return res;
};

 const pairsArr = pairing(myGroup)
 console.log("🚀 ~ file: Pairs.jsx:98 ~ Pairs ~ pairsArr", pairsArr)

//  const pairsArr = [['vasja', 'kolja'], ['petja', 'fedya']];


  // const [pairs, setPairs] = React.useState([])



//   function getArray(arr) {
//     const firstArr = arr.map((pair) => {
//     const myArr = [
//       createData(<ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>),
//       createData(<ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>),
//       createData(<ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>),
//       createData(<ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>),
//       createData(<ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>),
//       createData(<ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>),
//       createData(<ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>),
//       createData(<ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>),
//       createData(<ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>),
//       createData(<ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>, <ul><li>{`${pair[0]}-${pair[1]}`}</li></ul>),
//     ]
//     return myArr;
//   })
//   return firstArr;
// }

  // const rows = getArray(pairsArr);
  
  
  const rows = [
    createData('Понедельник', 'Понедельник', 'Понедельник', 'Понедельник'),
    createData(<ul><li>{`${pairsArr[0][0].login}-${pairsArr[0][1].login}`}</li><li>{`${pairsArr[1][0]}-${pairsArr[1][1]}`}</li></ul>, `${pairsArr[0][0]}-${pairsArr[0][1]}`, `${pairsArr[0][0].login}-${pairsArr[0][1].login}`, `${pairsArr[0][0]}-${pairsArr[0][1]}`),
    createData('Вторник', 'Вторник', 'Вторник', 'Вторник'),
    // createData(`${pairsArr}-${pairsArr[0][1]}`, `${pairsArr[0][0]}-${pairsArr[0][1]}`, `${pairsArr[0][0]}-${pairsArr[0][1]}`, `${pairsArr[0][0]}-${pairsArr[0][1]}`),
    createData('Среда', 'Среда', 'Среда', 'Среда'),
    createData('Solo', 'Solo', 'Solo', 'Solo'),
    createData('Четверг', 'Четверг', 'Четверг', 'Четверг'),
    createData('Solo', 'Solo', 'Solo', 'Solo'),
    createData('Пятница', 'Пятница', 'Пятница', 'Пятница'),
    createData('пара', 'пара', 'пара', 'пара'),
  ];

  console.log("🚀 ~ file: Pairs.jsx:83 ~ Pairs ~ rows ", rows )

  React.useEffect(() => {
    dispatch(initGroupAC(id));
}, []);

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
    </TableContainer>
  );
}