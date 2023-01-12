import React from 'react'
import Avatar from '@mui/material/Avatar';

export default function profileeditphoto({ImgSrc}) {
  return (
    <Avatar
    alt="Remy Sharp"
    src={ImgSrc}
    sx={{ width: 250, height: 250 }}
  />
  )
}
