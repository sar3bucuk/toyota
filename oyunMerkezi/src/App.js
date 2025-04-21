import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import ResetPassword from './pages/Resetpassword';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleRegister = (userData) => {
    console.log('Kayıt olan kullanıcı:', userData);
    setUser(userData);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Login darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} 
          />
          <Route 
            path="/register" 
            element={<Register onRegister={handleRegister} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} 
          />
          <Route 
            path="/dashboard" 
            element={<Dashboard user={user} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} 
          />
          <Route 
            path="/reset-password" 
            element={<ResetPassword />} // 🔹 Yeni route burada
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;