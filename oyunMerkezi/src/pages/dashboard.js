import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Hoşgeldiniz!</Typography>
      <Button variant="contained" onClick={handleLogout}>Çıkış Yap</Button>
    </Container>
  );
};

export default Dashboard;
