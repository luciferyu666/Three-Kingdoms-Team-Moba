const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); // 假設已經有一個Book模型

// 獲取所有兵書
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 獲取單個兵書
router.get('/:id', getBook, (req, res) => {
  res.json(res.book);
});

// 創建新的兵書
router.post('/', async (req, res) => {
  const book = new Book({
    name: req.body.name,
    description: req.body.description,
    effect: req.body.effect,
    applicableGenerals: req.body.applicableGenerals,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 更新兵書
router.patch('/:id', getBook, async (req, res) => {
  if (req.body.name != null) {
    res.book.name = req.body.name;
  }
  if (req.body.description != null) {
    res.book.description = req.body.description;
  }
  // 更多更新邏輯...
  try {
    const updatedBook = await res.book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 刪除兵書
router.delete('/:id', getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: 'Deleted This Book' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware函數用於查找兵書實例
async function getBook(req, res, next) {
  let book;
  try {
    book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: 'Cannot find book' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.book = book;
  next();
}

module.exports = router;
