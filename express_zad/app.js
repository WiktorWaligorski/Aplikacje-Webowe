const express = require('express');
const path = require('path');

const infoRouter = require('./routes/infoRouter');
const booksRouter = require('./routes/booksRouter');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', infoRouter);
app.use('/', booksRouter);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})