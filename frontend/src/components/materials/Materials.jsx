import React from 'react'
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { initMaterialsAC } from '../../store/materials/actionsCreators';

export default function Materials() {

    const dispatch = useDispatch();

    const {id} = useParams();
    
    const group = useSelector((store) => store.materials);

    const preventDefault = (event) => event.preventDefault();

    // const groupenames = []
    
    // for (let i = 0; i < group.length; i++){
    //     groupenames.push(group[i].name)
    // }
    // console.log("🚀🚀 ~ file: Materials.jsx:24 ~ Materials ~ groupenames", groupenames)

    const edited = group.map(({ id, name }) => ({
        title: name,
        id:id
        }))

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 }]

        useEffect(() => {
            dispatch(initMaterialsAC());
        }, []);



  return (
    <>
    <Grid container spacing={2} columns={16}>
    <Grid item xs={8}>
    <h2>Архив лекций</h2>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
    </Box>
    </Grid>
    <Grid item xs={8}>
    <h2>Добавить материал</h2>
    <TextField
            //   onChange={() = {}}
          id="outlined-multiline-flexible"
          label="Название"
          multiline
          maxRows={4}

        />
            <TextField
            //   onChange={() = {}}
          id="outlined-multiline-flexible"
          label="Ссылка на видео"
          multiline
          maxRows={4}

        />
              <Button variant="contained" component="label">
        Дополнительные материалы
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <Autocomplete
        multiple
        id="tags-standard"
        options={edited}
        getOptionLabel={(option) => option?.title}
        // defaultValue={[top100Films[13]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
      <Button variant="contained" color="success" 
    //   onClick={updateInfo}
      >Опубликовать
      </Button>
    </Grid>
    </Grid>
    </>
  )
}
