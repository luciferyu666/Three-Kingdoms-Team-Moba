import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 假設已經配置好Vue Router
import store from './store'; // 假設已經配置好Vuex

Vue.config.productionTip = false;

// 全局註冊組件、指令或過濾器等
// Vue.component('my-global-component', MyGlobalComponent);

new Vue({
  router, // 使用Vue Router
  store, // 使用Vuex
  render: h => h(App) // 渲染根組件
}).$mount('#app');
