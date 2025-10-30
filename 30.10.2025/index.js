const express = require('express');
const path = require("node:path");
const fs = require("fs");

const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'strona_glowna.html'));
})

app.get('/o-nas', (req, res) => {
  res.sendFile(path.join(__dirname, 'Onas.html'));
})

app.get('/oferta', (req, res) => {
  res.sendFile(path.join(__dirname, 'oferta.html'));
})

app.get('/kontakt', (req, res) => {
  res.sendFile(path.join(__dirname, 'kontakt.html'));
})

app.listen(3000, () => {
  console.log('App is running on https://localhost:3000')
})
