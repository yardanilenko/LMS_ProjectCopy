import * as React from 'react';
import { initGroupsAC } from "../../store/groups/actionsCreators";
import { useNavigate } from 'react-router-dom';
import { initGroupAC } from "../../store/group/actionsCreators";
import { useEffect } from "react";
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


export default function Groups() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const groups = useSelector((store) => store.groups);

    function getGroup(id){
        dispatch(initGroupAC(id));
    }

    useEffect(() => {
        dispatch(initGroupsAC());
    }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{"Группы"}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groups.map((item, idx) =>
            {return (
            <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row" onClick={() => {navigate(`/groups/${item.id}`); getGroup(item.id)}}>
                    {item.name}
                </StyledTableCell>
            </StyledTableRow>
            )}
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

