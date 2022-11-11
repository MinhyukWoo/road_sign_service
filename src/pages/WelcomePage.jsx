import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/images');
  });
  return (
    <Button
      onClick={() => {
        navigate('/images');
      }}
    >
      이동
    </Button>
  );
}

export default WelcomePage;
