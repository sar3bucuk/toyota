import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import "../styles/login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Giriş Yapılıyor:", { email, password });
        // Burada giriş işlemlerini yönetebilirsin (API çağrısı vb.)
    };

    return (
        <div className="login-card">
            {/* Sol Taraf: Giriş Formu */}
            <Paper elevation={3} className="login-form">
                <Typography variant="h5" className="login-title">
                    Giriş Yap
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="E-posta"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Şifre"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Giriş Yap
                    </Button>
                </Box>
                <Typography className="forgot-password">
                    <a href="#">Şifremi Unuttum?</a>
                </Typography>
            </Paper>

            {/* Sağ Taraf: Resim Alanı */}
            <div className="login-image"></div>
        </div>
    );
};

export default Login;
