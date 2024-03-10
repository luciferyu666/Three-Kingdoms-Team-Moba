import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 定义状态
    generals: [],
  },
  mutations: {
    // 定义改变状态的方法
    setGenerals(state, generals) {
      state.generals = generals;
    }
  },
  actions: {
    // 定义逻辑操作，例如从后端获取数据
    fetchGenerals({ commit }) {
      // 假设fetchGeneralsList是一个API调用方法，从后端获取武将列表
      fetchGeneralsList().then(generals => {
        commit('setGenerals', generals);
      }).catch(error => console.error('获取武将列表失败', error));
    }
  },
  getters: {
    // 定义获取状态的方法
    generals: state => state.generals,
  }
});

export default store;
