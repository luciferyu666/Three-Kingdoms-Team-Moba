import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue'; // 假设你有一个Home.vue组件作为主页
import GeneralsList from '../components/GeneralsList.vue'; // 假设你有一个GeneralsList.vue展示武将列表

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/generals',
    name: 'GeneralsList',
    component: GeneralsList
  },
  // 可以根据需要添加更多路由
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
