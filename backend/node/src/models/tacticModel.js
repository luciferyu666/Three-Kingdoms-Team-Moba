const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // 假设你已经设置了Sequelize的数据库连接

class Tactic extends Model {}

Tactic.init({
  // 模型属性
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
    type: DataTypes.STRING,
    allowNull: false
  },
  // 可以根据需要添加更多字段
}, {
  sequelize, // 我们需要传递连接实例
  modelName: 'Tactic', // 我们需要选择模型名称
  tableName: 'tactics' // 指定表名
});

module.exports = Tactic;
