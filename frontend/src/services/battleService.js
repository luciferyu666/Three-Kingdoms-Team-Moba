// services/battleService.js
import apiService from './apiService';

const battleService = {
  // 准备对战数据
  prepareBattleData(team1, team2) {
    // 根据需要处理或转换team1和team2的数据
    return { team1Config: team1, team2Config: team2 };
  },

  // 发起模拟对战
  async simulateBattle(team1, team2) {
    try {
      const battleData = this.prepareBattleData(team1, team2);
      const response = await apiService.simulateBattle(battleData.team1Config, battleData.team2Config);
      return this.processBattleResult(response.data);
    } catch (error) {
      console.error('模拟对战时发生错误:', error);
      throw error; // 或者根据需要处理错误
    }
  },

  // 处理模拟对战的结果
  processBattleResult(result) {
    // 根据项目需求处理和转换对战结果
    return result;
  }
};

export default battleService;
