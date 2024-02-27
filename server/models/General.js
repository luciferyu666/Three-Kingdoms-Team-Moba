const mongoose = require('mongoose');

const generalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '武將名稱是必填項'],
  },
  faction: {
    type: String,
    required: [true, '武將陣營是必填項'],
  },
  strength: {
    type: Number,
    required: [true, '武力值是必填項'],
  },
  intelligence: {
    type: Number,
    required: [true, '智力值是必填項'],
  },
  command: {
    type: Number,
    required: [true, '統御值是必填項'],
  },
  speed: {
    type: Number,
    required: [true, '速度值是必填項'],
  },
  tactics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tactic'
  }],
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('General', generalSchema);
