const express = require('express');
const router = express.Router();
const General = require('../models/General'); // 假設已經有一個General模型

// 獲取所有武將
router.get('/', async (req, res) => {
  try {
    const generals = await General.find();
    res.json(generals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 獲取單個武將
router.get('/:id', getGeneral, (req, res) => {
  res.json(res.general);
});

// 創建新的武將
router.post('/', async (req, res) => {
  const general = new General({
    name: req.body.name,
    faction: req.body.faction,
    strength: req.body.strength,
    intelligence: req.body.intelligence,
    // 其他武將相關屬性
  });

  try {
    const newGeneral = await general.save();
    res.status(201).json(newGeneral);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 更新武將
router.patch('/:id', getGeneral, async (req, res) => {
  if (req.body.name != null) {
    res.general.name = req.body.name;
  }
  // 更多更新邏輯...
  try {
    const updatedGeneral = await res.general.save();
    res.json(updatedGeneral);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 刪除武將
router.delete('/:id', getGeneral, async (req, res) => {
  try {
    await res.general.remove();
    res.json({ message: 'Deleted General' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware函數用於查找武將實例
async function getGeneral(req, res, next) {
  let general;
  try {
    general = await General.findById(req.params.id);
    if (general == null) {
      return res.status(404).json({ message: 'Cannot find general' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.general = general;
  next();
}

module.exports = router;
