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
  const groups = useSelector((store) => store.group);

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


if (pairs !== undefined && pairs.length > 0 && a.length) {

  let b = a.pop();
  
  let c = b.data;

let getArr = JSON.parse(c); 

let getRowUl = (row) => {
    let ul = <ul key={crypto.randomUUID()}>{row?.map((el) => <li key={crypto.randomUUID()}>{el.join('-')}</li> )}</ul>;
    return ul;
  }

let getRowsArr = () => {
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

myArray = getRowsArr();
}


let rows = (pairs !== undefined && myArray !== undefined && pairs.length > 0) ? myArray : firstArr;


// React.useEffect(() => {
//   dispatch(initPairsAC());
// }, []);

  return (
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
              <TableCell style={{ display: 'table-cell', alignItems: 'center', width: "20%", minHeight: "50px"}} align="left" colSpan={0}>
              <BackButton/>
              </TableCell>
              <TableCell style={{ display: 'table-cell', color: "white", backgroundColor: "black", alignItems: 'center', width: "80%", minHeight: "50px"}} align="center" colSpan={4}>
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