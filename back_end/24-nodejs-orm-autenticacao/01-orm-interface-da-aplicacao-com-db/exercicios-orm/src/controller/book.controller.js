const bookService = require('../service/books.service');

const getAll = async (_require, response) => {
  const books = await bookService.getAll();

  response.status(200).json(books);
};

module.exports = {
  getAll,
};
