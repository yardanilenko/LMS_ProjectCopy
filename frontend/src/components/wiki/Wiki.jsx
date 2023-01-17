import { Box, Divider, Grid, List, ListItem, ListItemText, TableBody, TableCell, tableCellClasses, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { initWikiAC } from '../../store/wiki/actionsCreators';

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


export default function Viki() {

    const dispatch = useDispatch();

    const wiki = useSelector((store) => store.wiki);

    const[page, setPage] = useState(0);

    function getWikiPage(item){
      setPage(item)
    }

    useEffect(() => {
        dispatch(initWikiAC());
      }, []);

  return (
    <Box>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={4}>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
        <TableBody>
            {wiki.map((item, idx) =>
              {return (
              <StyledTableRow key={crypto.randomUUID()}>
                  <StyledTableCell align="center" component="th" scope="row" onClick={() => {getWikiPage(idx)}}>
                      {item.name}
                  </StyledTableCell>
              </StyledTableRow>
              )}
            )}
        </TableBody>
          </List>
      </Grid>
        <Grid item xs={12}>
          <p>
            {wiki[page]?.page}
          </p>
        </Grid>
      </Grid>
    </Box>
  )
}
