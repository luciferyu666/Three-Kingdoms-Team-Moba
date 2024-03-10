import axios from 'axios';

// 设置基础的URL，假设后端API根路径为 http://localhost:3000/api
const API_BASE_URL = 'http://localhost:3000/api';

const apiService = {
  // 获取所有武将的信息
  fetchGenerals() {
    return axios.get(`${API_BASE_URL}/generals`);
  },

  // 获取特定武将的详细信息
  fetchGeneralDetails(id) {
    return axios.get(`${API_BASE_URL}/generals/${id}`);
  },

  // 获取所有战法的信息
  fetchTactics() {
    return axios.get(`${API_BASE_URL}/tactics`);
  },

  // 获取所有兵书的信息
  fetchBooks() {
    return axios.get(`${API_BASE_URL}/books`);
  },

  // 发起一次模拟对战
  simulateBattle(team1Config, team2Config) {
    return axios.post(`${API_BASE_URL}/simulate-battle`, { team1: team1Config, team2: team2Config });
  }
};

export default apiService;
