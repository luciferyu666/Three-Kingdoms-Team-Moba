const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // 假设你已经设置了Sequelize的数据库连接配置

class Book extends Model {}

Book.init({
  // 模型属性定义
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  effect: {
    type: DataTypes.TEXT, // 假设effect可能是较长的文本
    allowNull: false
  },
  // 根据需要可以添加更多的字段
}, {
  sequelize, // 传递连接实例
  modelName: 'Book', // 模型名称
  tableName: 'books' // 数据库中的表名称
});

module.exports = Book;
