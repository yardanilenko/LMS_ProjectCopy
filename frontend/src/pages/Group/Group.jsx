import * as React from 'react';
import { initGroupAC } from "../../store/group/actionsCreators";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
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

    const {id} = useParams();
    console.log("🚀 ~ file: Group.jsx:42 ~ Group ~ id", id)
    
    const group = useSelector((store) => store.group);
    console.log("🚀 ~ file: Group.jsx:44 ~ Group ~ group", group)

    useEffect(() => {
        dispatch(initGroupAC(id));
    }, []);

    const nameGroup = group[0] !== undefined ? group[0].name : "testName";
    
    const myGroup = group[0] !== undefined ? group[0].Users : [{login: "testLogin"}];

    
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
          {myGroup.map((item) =>
            {return (
            <StyledTableRow key={crypto.randomUUID()}>
                <StyledTableCell style={{ display: 'table-cell', justifyContent: 'center', alignItems: 'center', width: "100%", minHeight: "50px"}} align="center" colSpan={5} component="th" scope="row">
                    {item.login}
                </StyledTableCell>
            </StyledTableRow>
            )}
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
