import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import sha256 from 'crypto-js/sha256';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex((u) => u.email === email);

    if (userIndex === -1) {
      alert('Bu email ile kayıtlı kullanıcı bulunamadı.');
      return;
    }

    users[userIndex].hashedPassword = sha256(newPassword).toString();
    localStorage.setItem('users', JSON.stringify(users));
    alert('Şifreniz başarıyla güncellendi. Giriş yapabilirsiniz.');
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10} p={4} boxShadow={3} borderRadius={2}>
        <Typography variant="h5" gutterBottom>
          Şifre Sıfırlama
        </Typography>
        <TextField
          label="Kayıtlı Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Yeni Şifre"
          fullWidth
          type="password"
          margin="normal"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button variant="contained" fullWidth onClick={handleReset} sx={{ mt: 2 }}>
          Şifreyi Güncelle
        </Button>
      </Box>
    </Container>
  );
};

export default ResetPassword;
