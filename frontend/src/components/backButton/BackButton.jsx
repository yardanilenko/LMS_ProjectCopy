import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {

  const navigate = useNavigate();

  return (
        <Button size="small" ui='secondary' onClick={() => navigate(-1)}>
          <ArrowBackIcon color="action" fontSize="large" />
        </Button>
  );
}
