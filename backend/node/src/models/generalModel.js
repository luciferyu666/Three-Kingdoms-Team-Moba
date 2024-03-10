const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('数据库连接信息');

class General extends Model {}

General.init({
  // 定义模型属性
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strength: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  intelligence: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  speed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  // 其他模型选项
  sequelize, // 我们需要传递连接实例
  modelName: 'General', // 我们需要选择模型名称
  tableName: 'generals', // 指定表名
});

module.exports = General;
