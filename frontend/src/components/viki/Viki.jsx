import { Box, Grid, List, ListItem, TableBody, TableCell, tableCellClasses, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { initVikiAC } from '../../store/viki/actionsCreators';

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

    const viki = useSelector((store) => store.viki);
    console.log("🚀 ~ file: Viki.jsx:9 ~ Viki ~ viki", viki)

    const initialState = viki[0].page;

    const[page, setPage] = useState(initialState);

    function getVikiPage(item){
      setPage(item)
    }

    useEffect(() => {
        dispatch(initVikiAC());
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
            {viki.map((item) =>
              {return (
              <StyledTableRow key={crypto.randomUUID()}>
                  <StyledTableCell align="center" component="th" scope="row" onClick={() => {getVikiPage(item.page)}}>
                      {item.name}
                  </StyledTableCell>
              </StyledTableRow>
              )}
            )}
        </TableBody>
          </List>
      </Grid>
        <Grid item xs={12}>
          <ListItem>
            {page}
          </ListItem>
        </Grid>
      </Grid>
    </Box>
  )
}
