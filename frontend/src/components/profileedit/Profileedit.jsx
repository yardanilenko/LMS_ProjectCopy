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
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Profileedit() {
  
  let navigate = useNavigate()

    const [data, setData] = useState();
    const initialState = { city: '', phone: '', telegram: '', email: '', github: '' }
    const [datainput, setDatainput] = useState(initialState);

    const formHandler = (e) => {
      // console.log('=====>', e.target.value, e.target.name)
      console.log(datainput)
      setDatainput((preMy) => ({ ...preMy, [e.target.name]: e.target.value }))
    }

    const updateInfo = async () => {
        await fetch(
            "/updateinfo",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: 6,
                    city: datainput.city,
                    phone: datainput.phone,
                    telegram: datainput.telegram,
                    github: datainput.github,
                    email: datainput.email
                }),
            }
        )
    };
    

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

      // let myCity = data?.city !== undefined ? data?.city : "загрузка..."

  return (
    <>
    <Box>
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
      {/* <ListItemText primary="Город" secondary={data?.city} /> */}
      <TextField
          id="filled-helperText"
          label="Город"
          defaultValue=""
          variant="filled"
          onChange={formHandler}
          name="city"
        />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      {/* <ListItemText primary="Телефон" secondary={data?.phone} /> */}
      <TextField
          id="filled-helperText"
          label="Телефон"
          defaultValue=""
          variant="filled"
          onChange={formHandler}
          name="phone"
        />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      {/* <ListItemText primary="Телеграм" secondary={data?.telegram} /> */}
      <TextField
          id="filled-helperText"
          label="Телеграм"
          defaultValue=""
          variant="filled"
          onChange={formHandler}
          name="telegram"
        />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      {/* <ListItemText primary="Email" secondary={data?.email} /> */}
      <TextField
          id="filled-helperText"
          label="Email"
          defaultValue=""
          variant="filled"
          onChange={formHandler}
          name="email"
        />
    </ListItem>
    <Divider component="li" />
    <ListItem>
      {/* <ListItemText primary="Github" secondary={data?.github} /> */}
      <TextField
          id="filled-helperText"
          label="Github"
          defaultValue=""
          variant="filled"
          onChange={formHandler}
          name="github"
        />
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
      <Button variant="contained" color="success" component={Link} to="/profile" onClick={updateInfo}>Cохранить</Button>
  </Grid>
  </Grid>
  </Box>
  </>
  )
}