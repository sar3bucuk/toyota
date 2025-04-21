import { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, Link } from '@mui/material';
import { hashPassword } from '../utils/crypto';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = await hashPassword(password);

    const userData = { email, password: hashedPassword, rememberMe };
    onLogin(userData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 10 }}>
      <Typography variant="h5" align="center" gutterBottom>Giriş Yap</Typography>
      <TextField fullWidth margin="normal" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth margin="normal" label="Şifre" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <FormControlLabel control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />} label="Beni Hatırla" />
      <Button fullWidth variant="contained" type="submit">Giriş Yap</Button>
      <Box mt={2}>
        <Link href="#">Şifremi Unuttum</Link>
      </Box>
    </Box>
  );
};

export default LoginForm;