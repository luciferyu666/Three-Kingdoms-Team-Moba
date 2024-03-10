import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 假设你已经在'./router/index.js'中配置好了Vue Router
import store from './store'; // 假设你已经在'./store/index.js'中配置好了Vuex

Vue.config.productionTip = false;

new Vue({
  router, // 使用router
  store, // 使用store
  render: h => h(App)
}).$mount('#app');
