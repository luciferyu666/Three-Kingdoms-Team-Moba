const express = require('express');
const router = express.Router();
const pool = require('../db'); // 假設你有一個db.js檔案設定了PostgreSQL連接池

// 獲取所有武將的API
router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM generals ORDER BY id ASC');
        res.json(rows);
    } catch (error) {
        console.error('Error getting generals:', error);
        res.status(500).send('Server error');
    }
});

// 根據ID獲取特定武將的API
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM generals WHERE id = $1', [id]);
        if (rows.length === 0) {
            return res.status(404).send('General not found');
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(`Error getting general with ID ${id}:`, error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
