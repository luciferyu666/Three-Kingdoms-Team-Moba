const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// 環境配置
require('dotenv').config();

// 資料庫連接
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB連接成功'))
  .catch(err => console.error('MongoDB連接失敗', err));

// 中間件配置
app.use(cors()); // 跨域資源共享
app.use(bodyParser.json()); // 解析JSON格式請求體
app.use(morgan('dev')); // HTTP請求日誌

// 路由
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');
const tacticRoutes = require('./routes/tactics');
// 使用路由
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/tactics', tacticRoutes);

// 基本路由
app.get('/', (req, res) => {
  res.send('歡迎來到三國志隊伍評分應用程式API');
});

// 錯誤處理中間件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('服務器錯誤！');
});

// 啟動服務器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服務器運行在 http://localhost:${PORT}`);
});
