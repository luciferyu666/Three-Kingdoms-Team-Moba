const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '兵書名稱是必填項'],
  },
  description: {
    type: String,
    required: [true, '兵書描述是必填項'],
  },
  effect: {
    type: String,
    required: [true, '兵書效果是必填項'],
  },
  applicableGenerals: [{
    type: String,
    required: [true, '適用武將是必填項'],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Book', bookSchema);
