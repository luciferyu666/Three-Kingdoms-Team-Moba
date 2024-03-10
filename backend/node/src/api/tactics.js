const express = require('express');
const router = express.Router();

// 假設我們有一個模擬的戰法數據庫或服務
const tactics = [
  { id: 1, name: '連環計', effect: '減少敵方整體攻擊力10%' },
  { id: 2, name: '火攻', effect: '對敵方造成大量傷害' },
  // 更多戰法...
];

// 獲取所有戰法
router.get('/', (req, res) => {
  res.json(tactics);
});

// 新增戰法
router.post('/', (req, res) => {
  const { name, effect } = req.body;
  const newTactic = { id: tactics.length + 1, name, effect };
  tactics.push(newTactic);
  res.status(201).json(newTactic);
});

// 更新戰法資料
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, effect } = req.body;
  const index = tactics.findIndex(t => t.id == id);

  if (index !== -1) {
    tactics[index] = { id: Number(id), name, effect };
    res.json(tactics[index]);
  } else {
    res.status(404).send('Tactic not found');
  }
});

// 刪除戰法
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = tactics.findIndex(t => t.id == id);

  if (index !== -1) {
    tactics.splice(index, 1);
    res.send('Tactic deleted');
  } else {
    res.status(404).send('Tactic not found');
  }
});

module.exports = router;
