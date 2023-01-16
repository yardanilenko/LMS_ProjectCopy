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

  const [file, setFile] = useState('');
  const initialState = { name: '', url: '', groups: [] }
  const [datainput, setDatainput] = useState(initialState);


  // console.log(datainput.groups[0].id)


//   const sendMaterial = async () => {
//     try {
//       const data = new FormData()
//       data.append('file', file, file.name)
//       await fetch(
//         "/uploadfile",
//         {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 data: data,
//                 name: datainput.name,
//                 group_id: datainput.groups[0].id,
//                 url: datainput.url
//             }),
//         }
//     )
        

      
//     } catch (error) {
      
//     } 
// };


const sendFile = async () => {
  try {
    const data = new FormData()
    data.append('file', file, file.name)
    data.append('url', datainput.url)
    data.append('name', datainput.name)
    data.append('group_id', datainput.groups[0].id)
    // setAvatar(img.name)
    await fetch('/uploadfile', {
      method: 'POST',
      body: data
  })
  // .then(res => res.json())
  // .then(res => setAvatar(`/images/${res}`))
  // setAvatar(send.json())
  } catch (error) {
  }
}




  const formHandler = (e) => {
    setDatainput((preMy) => ({ ...preMy, [e.target.name]: e.target.value }))
  }

  
  // console.log(datainput)
    const dispatch = useDispatch();
    const {id} = useParams();
    const group = useSelector((store) => store.materials);
    const preventDefault = (event) => event.preventDefault();



    const edited = group.map(({ id, name }) => ({
        title: name,
        id:id
        }))

    // const top100Films = [
    //     { title: 'The Shawshank Redemption', year: 1994 },
    //     { title: 'The Godfather', year: 1972 }]

        useEffect(() => {
            dispatch(initMaterialsAC());
        }, []);


        function handleChangeFile (event) {
          setFile(event.target.files[0])
        }

        // console.log(datainput)
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
        {'underline="hover1'}
      </Link>
    </Box>
    </Grid>
    <Grid item xs={8}>
    <h2>Добавить материал</h2>
    <TextField
          onChange={formHandler}
          id="outlined-multiline-flexible"
          label="Название"
          name="name"
          multiline
          maxRows={4}

        />
            <TextField
          onChange={formHandler}
          id="outlined-multiline-flexible"
          label="Ссылка на видео"
          name="url"
          multiline
          maxRows={4}

        />
              <Button variant="contained" component="label">
        Дополнительные материалы
        <input 
        // hidden accept="image/*" multiple type="file" 
        type="file" hidden accept="application/pdf, application/zip, application/vnd.rar" onChange={handleChangeFile}/>
      </Button>
      <Autocomplete
        multiple
        id="tags-standard"
        name="groups"
        // value={valuegroups}
        onChange={(event,value) => {
          console.log(event,value)
              setDatainput((preMy) => ({ ...preMy, groups: value }))
        }}
        options={edited}
        getOptionLabel={(option) => option?.title}
        // defaultValue={[top100Films[13]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Выберите группы"
            placeholder="Группы"
          />
        )}
      />
      <Button variant="contained" color="success" onClick={sendFile}
    //   onClick={updateInfo}
      >Опубликовать
      </Button>
    </Grid>
    </Grid>
    </>
  )
}
