import React from 'react'
import {useParams} from "react-router-dom";
import { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Materialslist() {
  const [data, setData] = useState();
    const {id} = useParams();

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const dataReq = await (
          await fetch(
            `/lecturesall/${id}`
          )
        ).json();
        // set state when the data received
        console.log(dataReq)
        // console.log()
        setData(dataReq);
        // console.log(data)
        // console.log("1111",data)
        // setImgSrc(`/images/${data?.photo}`)
        // setCity(data.city)
        // setDatainput(data)
      };
      dataFetch();
    }, []);
    
    const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        •
      </Box>
    );

  return (
    <>
    {/* <iframe
      width="290"
      height="190"
      src="https://www.youtube.com/embed/LHFRwvnrgIU"
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
    <div>materialslist{id}</div> */}
    {data?.map((item) => {
      return (
        <> 
        { item.Files[0].url.includes('youtube') ? (<>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.name}
        </Typography>
        <iframe
      width="290"
      height="190"
      src={`https://www.youtube.com/embed/${item.Files[0].url.split("=")[1]}`}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
        <Link href={`${item.Files[0].url}`} underline="hover">
        {'Видео лекции'}
      </Link>
        {item?.Files.map((i) => {
          return (
            <>
        <div>
        <Link href={`http://localhost:3100/downloadfile/${i.name}`} underline="hover">
        {i.name}
      </Link>
      </div>
      </>
          )
        })}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </>) : (
<>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.name}
        </Typography>
        <Link href={`${item.Files[0].url}`} underline="hover">
        {'Видео лекции'}
      </Link>
        {item?.Files.map((i) => {
          return (
            <>
        <div>
        <Link href={`http://localhost:3100/downloadfile/${i.name}`} underline="hover">
        {i.name}
      </Link>
      </div>
      </>
          )
        })}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>

    </>)
        }
    </>
    
    )
    })
    
    
    }
    </>
  
  
  
  )
}
