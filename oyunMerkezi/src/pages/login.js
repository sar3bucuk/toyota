import React, { useState, useEffect } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [savedUser, setSavedUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/dashboard'); // Token varsa direkt yönlendir
    }

    if (userData) {
      setSavedUser(userData); // Hızlı giriş için kayıtlı kullanıcıyı çek
    }
  }, [navigate]);

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (!userData) {
      alert('Kayıtlı kullanıcı bulunamadı.');
      return;
    }

    const hashedPassword = sha256(password).toString();

    if (email === userData.email && hashedPassword === sha256(userData.password).toString()) {
      if (rememberMe) {
        localStorage.setItem('token', '123456789'); // Sahte token
      }
      alert('Giriş başarılı!');
      navigate('/dashboard');
    } else {
      alert('Email veya şifre yanlış!');
    }
  };

  const handleQuickLogin = () => {
    setEmail(savedUser.email);
    setPassword(savedUser.password);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Giriş Yap</Typography>

      {savedUser && (
        <Box mb={2}>
          <Typography>Hızlı Giriş için: {savedUser.email}</Typography>
          <Button variant="outlined" onClick={handleQuickLogin}>Hızlı Giriş</Button>
        </Box>
      )}

      <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth label="Şifre" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />

      <FormControlLabel
        control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
        label="Beni Hatırla"
      />

      <Button fullWidth variant="contained" onClick={handleLogin}>Giriş Yap</Button>

      <Box mt={2}>
        <Button variant="text" onClick={() => navigate('/register')}>Kayıt Ol</Button>
        <Button variant="text" onClick={() => alert('Şifre sıfırlama linki gönderilecek.')}>Şifremi Unuttum</Button>
      </Box>
    </Container>
  );
};

export default Login;
