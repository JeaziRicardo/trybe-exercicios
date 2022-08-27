const express = require('express');
const BooksController = require('../controller/book.controller');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', BooksController.getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));