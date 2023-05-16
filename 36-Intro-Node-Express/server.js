// Steg 1. Importera express modulen...
const express = require('express');

// Steg 2. Instansiera express.
const app = express();

// Endpoint resurser
app.get('/movies/', (req, res) => {
  res.status(200).json({ success: true, data: { id: 1, title: 'Avatar' } });
});

app.get('/movies/:id/:title', (req, res) => {
  console.log(req.params.id, req.params.title);
  res.status(200).json({ id: 1, title: 'Avatar' });
});

const PORT = 5020;
// Steg 3. Starta upp servern...
app.listen(
  PORT,
  console.log(`Servern är startad och är upp och kör på porten ${PORT}`)
);
