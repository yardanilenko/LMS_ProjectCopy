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
    
    const group = useSelector((store) => store.group);

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
            <StyledTableCell>{nameGroup}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myGroup.map((item, idx) =>
            {return (
            <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
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
