import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, List, ListItem, ListItemText, Chip, Paper } from '@mui/material';

const games = [
  { id: 1, name: 'Satranç', players: '2 Oyuncu' },
  { id: 2, name: 'Tombala', players: 'Çok Oyunculu' }
];

const lobbies = [
  { id: 1, name: 'Satranç Turnuvası', type: 'Etkinlik', password: false },
  { id: 2, name: 'Tombala Gecesi', type: 'Normal', password: true }
];

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Oyun Merkezi
      </Typography>

      {/* Oyun Listesi */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Oyunlar
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {games.map((game) => (
          <Grid item xs={12} sm={6} md={4} key={game.id}>
            <Card sx={{ textAlign: 'center', p: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{game.name}</Typography>
                <Typography color="textSecondary" sx={{ mb: 2 }}>{game.players}</Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Oyna
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Lobi Listesi */}
      <Box mt={6} component={Paper} elevation={4} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Aktif Lobiler
        </Typography>
        <List>
          {lobbies.map((lobby) => (
            <ListItem key={lobby.id} sx={{ borderBottom: '1px solid #ddd' }}>
              <ListItemText primary={lobby.name} secondary={lobby.type} />
              {lobby.password ? <Chip label="Şifreli" color="secondary" /> : <Chip label="Açık" color="primary" />}
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Lobi Oluşturma Butonu */}
      <Box mt={4}>
        <Button variant="contained" color="secondary" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}>
          Yeni Lobi Oluştur
        </Button>
      </Box>
    </Container>
  );
};

export default Home;