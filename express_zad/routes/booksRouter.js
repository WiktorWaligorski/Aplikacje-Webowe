const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const DATA_FILE = path.join(__dirname, '../data/books.json');
const books = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

router.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/add.html'));
});

router.post('/books', (req, res) => {
    const { title, author, year } = req.body || {};
    const yearNum = Number(year);

    if (!title || !String(title).trim() || !author || !String(author).trim() || !Number.isInteger(yearNum)) {
        return res.status(400).json({ error: 'Wymagane pola: title, author oraz year (liczba całkowita)' });
    }

    const newId = books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1;
    const newBook = {
        id: newId,
        title: String(title).trim(),
        author: String(author).trim(),
        year: yearNum,
    };

    books.push(newBook);
    fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2), 'utf8');

    res.status(201).json(newBook);
});





router.get('/books', (req, res) => {
    res.json(books);
})

router.get('/books/:id', (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(book => book.id === id);
    if (!book) return res.status(404).json({ error: 'Nie znaleziono książki' });
    res.json(book);
})

module.exports = router;