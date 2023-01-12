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
import { useNavigate } from 'react-router-dom'
// import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export default function Profile() {
  let navigate = useNavigate()
    const [data, setData] = useState();

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const data = await (
            await fetch(
              "/userinfo"
            )
          ).json();
          // set state when the data received
          setData(data);
          console.log(data.Group.name)
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
      <ListItemText primary="Имя" secondary={data?.name} />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Фамилия" secondary={data?.surname} />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Группа" secondary={data?.Group?.name} />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Город" secondary={data?.city} />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Телефон" secondary={data?.phone} />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Телеграм" secondary={data?.telegram} />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Email" secondary={data?.email} />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      <ListItemText primary="Github" secondary={data?.github} />
      {/* <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        /> */}
    </ListItem>
    <Divider component="li" />
  </List>
  </Grid>
  <Grid item xs={8}>
  <Avatar
        alt="Remy Sharp"
        src={data?.photo}
        sx={{ width: 250, height: 250 }}
      />
            <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      <Button variant="contained" onClick={() => navigate("/profileedit")}>Изменить информацию</Button>
  </Grid>
  </Grid>
  </>
  )
}