// models/generalModel.js
import apiService from '../services/apiService';

export default class GeneralModel {
  constructor({ id, name, strength, intelligence, speed }) {
    this.id = id;
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.speed = speed;
  }

  // 获取所有武将的静态方法
  static async fetchAll() {
    try {
      const response = await apiService.fetchGenerals();
      // 假设后端返回的数据是一个包含武将数据的数组
      return response.data.map(generalData => new GeneralModel(generalData));
    } catch (error) {
      console.error('获取武将数据失败:', error);
      throw error;
    }
  }

  // 可以添加更多与武将相关的方法，比如根据特定条件搜索武将等
}
