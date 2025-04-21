import React, { useState } from 'react';
import {
  TextField, Button, Box, Card, CardContent,
  Typography, IconButton, Link
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import sha256 from 'crypto-js/sha256';
import { useNavigate } from 'react-router-dom';

const Register = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const generateUniqueTag = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!nickname || !email || !password || !confirmPassword) {
      alert('Tüm alanları doldurmalısınız.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Şifreler eşleşmiyor.');
      return;
    }
  
    // Mevcut kullanıcıları çek (yoksa boş dizi)
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Aynı email ile kayıt var mı kontrol et
    const userExists = existingUsers.some(user => user.email === email);
    if (userExists) {
      alert('Bu email adresiyle daha önce kayıt yapılmış.');
      return;
    }
  
    const tag = generateUniqueTag();
    const fullNickname = `${nickname}#${tag}`;
  
    const newUser = {
      nickname: fullNickname,
      email,
      password,
      hashedPassword: sha256(password).toString(),
    };
  
    // Kullanıcıyı diziye ekle ve kaydet
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    alert(`Hoş geldin, ${fullNickname}!`);
    navigate('/');
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
      <Card
        sx={(theme) => ({
          p: 3,
          borderRadius: 5,
          maxWidth: 400,
          width: '100%',
          backdropFilter: 'blur(8px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? 'rgba(255,255,255,0.7)'
              : 'rgba(0, 0, 0, 0.7)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          color: theme.palette.text.primary
        })}
      >
        <CardContent>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDarkMode}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>

          <Typography variant="h5" align="center">Kayıt Ol</Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Kullanıcı Adı" margin="normal"
              value={nickname} onChange={(e) => setNickname(e.target.value)}
            />
            <TextField
              fullWidth label="Email" margin="normal"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth label="Şifre" type="password" margin="normal"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              fullWidth label="Şifre Tekrar" type="password" margin="normal"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
              Kayıt Ol
            </Button>
          </Box>

          <Typography mt={2}>
            Hesabın var mı?{' '}
            <Link href="/" underline="hover">
              Giriş Yap
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;