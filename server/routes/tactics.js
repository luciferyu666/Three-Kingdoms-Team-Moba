const express = require('express');
const router = express.Router();
const Tactic = require('../models/Tactic'); // 假設已經有一個Tactic模型

// 獲取所有戰法
router.get('/', async (req, res) => {
  try {
    const tactics = await Tactic.find();
    res.json(tactics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 獲取單個戰法
router.get('/:id', getTactic, (req, res) => {
  res.json(res.tactic);
});

// 創建新的戰法
router.post('/', async (req, res) => {
  const tactic = new Tactic({
    name: req.body.name,
    description: req.body.description,
    effect: req.body.effect,
    applicableGeneralsTypes: req.body.applicableGeneralsTypes,
  });

  try {
    const newTactic = await tactic.save();
    res.status(201).json(newTactic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 更新戰法
router.patch('/:id', getTactic, async (req, res) => {
  if (req.body.name != null) {
    res.tactic.name = req.body.name;
  }
  // 更多更新邏輯...
  try {
    const updatedTactic = await res.tactic.save();
    res.json(updatedTactic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 刪除戰法
router.delete('/:id', getTactic, async (req, res) => {
  try {
    await res.tactic.remove();
    res.json({ message: 'Deleted Tactic' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware函數用於查找戰法實例
async function getTactic(req, res, next) {
  let tactic;
  try {
    tactic = await Tactic.findById(req.params.id);
    if (tactic == null) {
      return res.status(404).json({ message: 'Cannot find tactic' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.tactic = tactic;
  next();
}

module.exports = router;
