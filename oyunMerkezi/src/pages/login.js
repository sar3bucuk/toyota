import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material';
import sha256 from 'crypto-js/sha256';

const Login = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
    const token = localStorage.getItem('token');
  
    if (token && window.location.pathname === '/') {
      navigate('/dashboard');
    }
  
    // rememberMe ile kayıtlı kullanıcı bilgilerini inputlara yerleştir
    if (rememberedUser?.rememberMe) {
      setEmail(rememberedUser.email);
      setPassword(rememberedUser.password);
      setRememberMe(true);
    }
  }, [navigate]);
  
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const foundUser = users.find(
      (user) => user.email === email && user.hashedPassword === sha256(password).toString()
    );
  
    if (!foundUser) {
      alert('Email veya şifre yanlış!');
      return;
    }
  
    // Token kaydet
    localStorage.setItem('token', 'cartoon-network-token');
  
    if (rememberMe) {
      localStorage.setItem(
        'rememberedUser',
        JSON.stringify({
          email,
          password,
          rememberMe: true,
        })
      );
    } else {
      localStorage.removeItem('rememberedUser');
    }
  
    alert(`Hoş geldin, ${foundUser.nickname}!`);
    navigate('/dashboard');
  };  

  return (
    <Box
      sx={{
        backgroundImage: 'url("/background.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={(theme) => ({
            p: 3,
            borderRadius: 5,
            backdropFilter: 'blur(8px)',
            backgroundColor:
              theme.palette.mode === 'light'
                ? 'rgba(255,255,255,0.7)'
                : 'rgba(0, 0, 0, 0.7)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            color: theme.palette.text.primary,
            textAlign: 'center'
          })}
        >
          <CardContent>
            <Box display="flex" justifyContent="flex-end" mb={2}>
              <IconButton onClick={toggleDarkMode}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                color: (theme) => theme.palette.mode === 'light' ? '#333' : '#FF4081',
              }}
            >
              Giriş Yap
            </Typography>

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiInputBase-input': {
                  color: (theme) =>
                    theme.palette.mode === 'light' ? '#333' : 'white',
                }
              }}
            />

            <TextField
              fullWidth
              label="Şifre"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiInputBase-input': {
                  color: (theme) =>
                    theme.palette.mode === 'light' ? '#333' : 'white',
                }
              }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Beni Hatırla"
              sx={(theme) => ({
                color: theme.palette.mode === 'light' ? '#333' : 'white',
              })}
            />

            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{ mt: 2 }}
            >
              Giriş Yap
            </Button>

            <Box mt={2} display="flex" justifyContent="space-between">
              <Button
                variant="text"
                onClick={() => navigate('/register')}
                sx={(theme) => ({
                  color: theme.palette.mode === 'light' ? '#333' : 'white',
                })}
              >
                Kayıt Ol
              </Button>
              <Button
                variant="text"
                onClick={() => navigate('/reset-password')}
                sx={(theme) => ({
                color: theme.palette.mode === 'light' ? '#333' : 'white',
            })}
              >
                Şifremi Unuttum
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;