const express = require('express');
const router = express.Router();
const pool = require('../db'); // 假設你有一個設置了PostgreSQL連接池的db.js文件

// 獲取所有兵書的列表
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM books');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// 通過ID獲取特定兵書
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).send('Book not found');
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// 創建新的兵書
router.post('/', async (req, res) => {
  const { name, effect_description } = req.body;
  try {
    const { rows } = await pool.query('INSERT INTO books (name, effect_description) VALUES ($1, $2) RETURNING *', [name, effect_description]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// 更新兵書信息
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, effect_description } = req.body;
  try {
    const { rows } = await pool.query('UPDATE books SET name = $1, effect_description = $2 WHERE id = $3 RETURNING *', [name, effect_description, id]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// 刪除兵書
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM books WHERE id = $1', [id]);
    res.send('Book deleted successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
