import React from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {

  const navigate = useNavigate();

  return (
        <Button size="small" ui='secondary' onClick={() => navigate(-1)}>
          <KeyboardArrowLeft />
          Back
        </Button>
  );
}