// models/tacticModel.js
import apiService from '../services/apiService';

export default class TacticModel {
  constructor({ id, name, effect }) {
    this.id = id;
    this.name = name;
    this.effect = effect;
  }

  // 获取所有战法的静态方法
  static async fetchAll() {
    try {
      const response = await apiService.fetchTactics();
      // 假设后端返回的数据格式正确，是一个包含战法信息的数组
      return response.data.map(tacticData => new TacticModel(tacticData));
    } catch (error) {
      console.error('获取战法数据失败:', error);
      throw error;
    }
  }

  // 可以根据需要添加更多方法，如根据特定条件搜索战法等
}
