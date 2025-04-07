import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    const userData = {
      email,
      password: sha256(password).toString(),
    };

    localStorage.setItem('user', JSON.stringify(userData));
    alert('Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.');
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Kayıt Ol</Typography>

      <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth label="Şifre" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />

      <Button fullWidth variant="contained" onClick={handleRegister}>Kayıt Ol</Button>
    </Container>
  );
};

export default Register;
