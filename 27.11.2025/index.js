const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://patrykprzybyl_db_user:4IMrxrTWdFSSl6wH@cluster.iyhazhf.mongodb.net/?appName=Cluster";

const prisma = new PrismaClient();
const app = express();
app.use(bodyParser.json());

const client = new MongoClient(uri, {
    serverApi: 
    { 
      version: ServerApiVersion.v1, 
      strict: true, 
      deprecationErrors: true 
    }
});

app.use(async (req, res, next) => {
  try {
    await client.connect();
    mongoDb = client.db("Cluster");
    await mongoDb.collection("accessLogs").insertOne({
      date: new Date(),
      method: req.method,
      url: req.originalUrl,
      body: req.body
    });
  } catch (err) {}
  next();
});

app.get('/wpisy', async (req, res) => {
  try {
    const wpisy = await prisma.wpis.findMany({
      include: {
        kategoria: true,
        komentarz: true
      },
    });
    res.json(wpisy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/wpis/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const wpis = await prisma.wpis.findUnique({
      where: { id: Number(id) },
      include: { kategoria: true, komentarz: true }
    });
    res.json(wpis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/wpis', async (req, res) => {
  const { uzytkownik, zawartosc, id_kategorii } = req.body;
  try {
    const newWpis = await prisma.wpis.create({
      data: {
        uzytkownik,
        zawartosc,
        id_kategorii
      },
      include: { kategoria: true, komentarz: true }
    });
    res.json(newWpis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/wpis/:id', async (req, res) => {
  const { id } = req.params;
  const { uzytkownik, zawartosc, id_kategorii } = req.body;
  try {
    const updatedWpis = await prisma.wpis.update({
      where: { id: Number(id) },
      data: { uzytkownik, zawartosc, id_kategorii },
      include: { kategoria: true, komentarz: true }
    });
    res.json(updatedWpis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/wpis/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWpis = await prisma.wpis.delete({
      where: { id: Number(id) }
    });
    res.json(deletedWpis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/kategorie', async (req, res) => {
  try {
    const kategorie = await prisma.kategoria.findMany({
      include: { wpis: true }
    });
    res.json(kategorie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/kategoria', async (req, res) => {
  const { kategoria } = req.body;
  try {
    const newKat = await prisma.kategoria.create({
      data: { kategoria }
    });
    res.json(newKat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/komentarz', async (req, res) => {
  const { id_wpisu, uzytkownik, zawartosc } = req.body;
  try {
    const newKom = await prisma.komentarz.create({
      data: { id_wpisu, uzytkownik, zawartosc }
    });
    res.json(newKom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/komentarz/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedKom = await prisma.komentarz.delete({
      where: { id: Number(id) }
    });
    res.json(deletedKom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use(async (err, req, res, next) => {
  try {
    await client.connect();
    mongoDb = client.db("Cluster");
    await mongoDb.collection("errorLogs").insertOne({
      date: new Date(),
      message: err.message,
      url: req.originalUrl,
      method: req.method,
      body: req.body
    });
  } catch (err) {}
  res.json({ error: "error" });
});

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})