import * as React from 'react';
import { initGroupAC } from "../../store/group/actionsCreators";
import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BackButton from '../../components/backButton/BackButton';
import { initUserInfoAC } from '../../store/userInfo/actionsCreators';


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


export default function Group() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {id} = useParams();
    // console.log("🚀 ~ file: Group.jsx:42 ~ Group ~ id", id)
    
    const group = useSelector((store) => store.group);
    const users = useSelector((store) => store.userInfo);
   console.log("🚀 ~ file: Group.jsx:47 ~ Group ~ users", users)
    console.log("🚀 ~ file: Group.jsx:44 ~ Group ~ group", group)

    useEffect(() => {
        dispatch(initGroupAC(id));
        dispatch(initUserInfoAC(id));
    }, []);

    const nameGroup = group[0] !== undefined ? group[0].name : "testName";
    const nameUser = (users !== undefined && users.length) ? users.name : "Список ещё не сформирован";
    const surnameUser = (users !== undefined && users.length) ? users.surname : "Список ещё не сформирован";

    const myGroup = group[0] !== undefined ? group[0].Users : [{login: "testLogin"}];
    // console.log("🚀 ~ file: Group.jsx:54 ~ Group ~ myGroup", myGroup)

    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
              <TableCell style={{ display: 'table-cell', alignItems: 'center', width: "10%", minHeight: "50px"}} align="left" colSpan={0}>
              <BackButton/>
              </TableCell>
              <TableCell style={{ display: 'table-cell', color: "white", backgroundColor: "black", alignItems: 'center', width: "90%", minHeight: "50px"}} align="center" colSpan={4}>
              {nameGroup}
              </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) =>
            {return (
            <StyledTableRow key={crypto.randomUUID()}>
                <StyledTableCell style={{ display: 'table-cell', justifyContent: 'center', alignItems: 'center', width: "100%", minHeight: "50px"}} align="center" colSpan={5} component="th" scope="row" onClick={() => {navigate(`/userinfo/${item.user_id}`)}}>
                    {item.name ? (item.name + ' ' + item.surname) : "Список студентов ещё не сформирован"}
                </StyledTableCell>
            </StyledTableRow>
            )}
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
