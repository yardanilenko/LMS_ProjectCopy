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
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


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

export default function ShowPairs() {
  // const dispatch = useDispatch();

  const {id} = useParams();

  const myId = +id;

  
  const pairs = useSelector((store) => store.pair);
  // console.log("🚀 ~ file: showPairs.jsx:44 ~ ShowPairs ~ pairs", pairs)
  const groups = useSelector((store) => store.group);
  const users = useSelector((store) => store.userInfo);
  // console.log("🚀 ~ file: showPairs.jsx:46 ~ ShowPairs ~ users", users)

  const groupName = groups[0]?.name;

  function createData(week1, week2, week3, week4) {
    return { week1, week2, week3, week4 };
  }
  

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

const firstArr = getfirstRowsArr();

let myArray

let a = pairs !== undefined ? pairs.filter(el => el.group_id === myId) : [];

// console.log("AAAAAA", a);


if (pairs !== undefined && pairs.length > 0 && a.length) {

  let b = a.pop();
  // console.log("🚀 ~ file: showPairs.jsx:89 ~ ShowPairs ~ b", b)
  
  let c = b.data;

let getArr = JSON.parse(c); 
// console.log("🚀 ~ file: showPairs.jsx:91 ~ ShowPairs ~ getArr", getArr)

let getRowUl = (row) => {
    let ul = <ul key={crypto.randomUUID()}>{row?.map((el) => <li key={crypto.randomUUID()}>{el?.join('-')}</li> )}</ul>;
    return ul;
  }

  function getShuffledArr(array) {
    let result = [], source = array.concat([]);
    // console.log("🚀 ~ file: ButtonSendPairs.jsx:10 ~ getShuffledArr ~ source", source)
  
    while (source.length) {
      let index = Math.floor((Math.random()-0.5) * source.length);
      result.push(source.splice(index, 1)[0]);
   }
  
    if(result === array){
        result.reverse();
    }
  
    return result;
  }

let getRowsArr = () => {
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
  const phrase = 'Solo';
  let ranRows = [];
  for (let i = 0; i < 20; i++) {
    if(i < 12){
      ranRows.push(getRowUl(getArr[i]));
    } else {
      ranRows.push(phrase);
    }
  }
  let newRanRows = getShuffledArr(ranRows)
  let myRows = [];
    myRows = [
  createData(days[0], days[0], days[0], days[0]),
  createData(newRanRows[0], newRanRows[1], newRanRows[2], newRanRows[3]),
  createData(days[1], days[1], days[1], days[1]),
  createData(newRanRows[4], newRanRows[5], newRanRows[6], newRanRows[7]),
  createData(days[2], days[2], days[2], days[2]),
  createData(newRanRows[8], newRanRows[9], newRanRows[10], newRanRows[11]),
  createData(days[3], days[3], days[3], days[3]),
  createData(newRanRows[12], newRanRows[13], newRanRows[14], newRanRows[15]),
  createData(days[4], days[4], days[4], days[4]),
  createData(newRanRows[16], newRanRows[17], newRanRows[18], newRanRows[19]),
];
return myRows;
}

myArray = getRowsArr();
}


let rows = (pairs !== undefined && myArray !== undefined && pairs.length > 0) ? myArray : firstArr;


// React.useEffect(() => {
//   dispatch(initPairsAC());
// }, []);

  return (
    <TableContainer component={Paper}>
      
      <Table style={{tableLayout: 'fixed', width: '100%'}} sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
              <TableCell style={{ display: 'table-cell', alignItems: 'center', width: "5%", minHeight: "50px"}} align="left" colSpan={0}>
              <BackButton/>
              </TableCell>
              <TableCell style={{ display: 'table-cell', color: "white", backgroundColor: "black", alignItems: 'center', width: "95%", minHeight: "50px"}} align="center" colSpan={4}>
                {groupName}
              </TableCell>
            </TableRow>
          <TableRow>
            <StyledTableCell style={{ backgroundColor: "#44014C"}}>Неделя 1</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#44014C"}} align="center">Неделя 2</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#44014C"}} align="center">Неделя 3</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#44014C"}} align="right">Неделя 4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={crypto.randomUUID()}>
              <StyledTableCell component="th" scope="row">
                {row.week1}
              </StyledTableCell>
              <StyledTableCell align="center">{row.week2}</StyledTableCell>
              <StyledTableCell align="center">{row.week3}</StyledTableCell>
              <StyledTableCell align="right">{row.week4}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}