import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

export default function Profile() {

    const [data, setData] = useState();

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const data = await (
            await fetch(
              "https://"
            )
          ).json();
          // set state when the data received
          setData(data);
        };
        dataFetch();
      }, []);

  return (
    <>
    <Grid container spacing={2} columns={16}>
    <Grid item xs={8}>
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
    }}
  >
    <ListItem>
      <ListItemText primary="Имя" secondary="qwe123" />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Фамилия" secondary="qwe123" />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Группа" secondary="qwe123" />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Город" secondary="qwe123" />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Телефон" secondary="qwe123" />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Телеграм" secondary="qwe123" />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Email" secondary="qwe123" />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Github" secondary="qwe123" />
    </ListItem>
    <Divider component="li" />
  </List>
  </Grid>
  <Grid item xs={8}>
  <Avatar
        alt="Remy Sharp"
        src="https://www.mantruckandbus.com/fileadmin/_processed_/2/b/csm_19-09_startseite_interviewkachel_324_224_3_726a3e77d5.jpg"
        sx={{ width: 250, height: 250 }}
      />
            <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      <Button variant="contained">Изменить информацию</Button>
  </Grid>
  </Grid>
  </>
  )
}
