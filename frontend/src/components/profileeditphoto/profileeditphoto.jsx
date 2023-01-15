import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useState, useEffect} from 'react';


export default function Profileeditphoto({avatar, ImgSrc}) {
  // useEffect(() => {
  //   console.log(ImgSrc)
  // }, [ImgSrc]);
  // const [data, setData] = useState(ImgSrc);
  return (
    <Avatar
    alt="Remy Sharp"
    src={avatar ? avatar : ImgSrc} 
    sx={{ width: 250, height: 250 }}
  />
  )
}
