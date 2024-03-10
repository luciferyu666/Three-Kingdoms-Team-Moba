const axios = require('axios');

// 假设我们有一个外部API需要与之通讯
const EXTERNAL_API_BASE_URL = 'https://external-api.com/v1';

const apiService = {
  // 获取外部API的武将数据
  fetchGeneralsFromExternalApi: async function() {
    try {
      const response = await axios.get(`${EXTERNAL_API_BASE_URL}/generals`);
      return response.data;
    } catch (error) {
      console.error('Error fetching generals from external API:', error);
      throw error;
    }
  },

  // 向外部API发送一次模拟对战的请求
  simulateBattleWithExternalApi: async function(team1, team2) {
    try {
      const response = await axios.post(`${EXTERNAL_API_BASE_URL}/simulate-battle`, {
        team1,
        team2
      });
      return response.data;
    } catch (error) {
      console.error('Error simulating battle with external API:', error);
      throw error;
    }
  },

  // 其他与外部API交互的方法...
};

module.exports = apiService;
