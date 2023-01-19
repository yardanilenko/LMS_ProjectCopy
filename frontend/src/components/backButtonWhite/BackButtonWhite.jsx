import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function BackButtonWhite(props) {
console.log("🚀 ~ file: BackButtonWhite.jsx:7 ~ BackButtonWhite ~ props", props)

  const navigate = useNavigate();

  return (
        <Button size="small" ui='secondary' sx={props.sx} onClick={() => navigate(-1)}>
          <ArrowBackIcon fontSize="large" />
        </Button>
  );
}

