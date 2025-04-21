import React, { useState } from 'react';
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  TextField,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const games = [
    { id: 1, name: 'Tombala' },
    { id: 2, name: 'Satranç' },
    { id: 3, name: 'Masa Tenisi' },
  ];

  const lobbies = [
    { id: 1, name: 'Lobi 1', type: 'Şifreli' },
    { id: 2, name: 'Lobi 2', type: 'Etkinlik' },
    { id: 3, name: 'Lobi 3', type: 'Şifreli' },
  ];

  const userStats = [
    { game: 'Tombala', score: 120 },
    { game: 'Satranç', score: 80 },
    { game: 'Masa Tenisi', score: 95 },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newLobbyName, setNewLobbyName] = useState('');
  const [newLobbyType, setNewLobbyType] = useState('Şifreli');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleCreateLobby = () => {
    alert(`Yeni lobi oluşturuldu: ${newLobbyName} (${newLobbyType})`);
    setNewLobbyName('');
    setNewLobbyType('Şifreli');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sol Menü */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" gutterBottom>Kullanıcı Bilgileri</Typography>
          <Divider />
          <List>
            {userStats.map((stat, index) => (
              <ListItem key={index}>
                <ListItemText primary={stat.game} secondary={`Skor: ${stat.score}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Ana içerik */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* Üst Menü */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4">Hoşgeldiniz!</Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout}>Çıkış Yap</Button>
        </Box>

        {/* Oyunlar Listesi */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>Oyunlar</Typography>
          <Grid container spacing={2}>
            {games.map((game) => (
              <Grid item xs={12} sm={6} md={4} key={game.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{game.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Lobiler Listesi */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>Lobiler</Typography>
          <Grid container spacing={2}>
            {lobbies.map((lobby) => (
              <Grid item xs={12} sm={6} md={4} key={lobby.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{lobby.name}</Typography>
                    <Chip
                      label={lobby.type}
                      color={lobby.type === 'Şifreli' ? 'primary' : 'secondary'}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Yeni Lobi Oluşturma */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>Yeni Lobi Oluştur</Typography>
          <TextField
            label="Lobi Adı"
            fullWidth
            margin="normal"
            value={newLobbyName}
            onChange={(e) => setNewLobbyName(e.target.value)}
          />
          <TextField
            label="Lobi Türü"
            fullWidth
            margin="normal"
            select
            value={newLobbyType}
            onChange={(e) => setNewLobbyType(e.target.value)}
            SelectProps={{ native: true }}
          >
            <option value="Şifreli">Şifreli</option>
            <option value="Etkinlik">Etkinlik</option>
          </TextField>
          <Button variant="contained" color="primary" fullWidth onClick={handleCreateLobby} sx={{ mt: 2 }}>
            Lobi Oluştur
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;