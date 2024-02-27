const mongoose = require('mongoose');

const tacticSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '戰法名稱是必填項'],
  },
  description: {
    type: String,
    required: [true, '戰法描述是必填項'],
  },
  effect: {
    type: String,
    required: [true, '戰法效果是必填項'],
  },
  applicableGeneralsTypes: [{
    type: String,
    required: [true, '適用武將類型是必填項'],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Tactic', tacticSchema);
