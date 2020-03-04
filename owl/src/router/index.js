import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import NewRecord from '../views/newrecord';
import Admin from '../views/admin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/createNewRecord',
    name:'NewRecord',
    component:NewRecord
  },
  {
    path:'/admin',
    name:'Admin',
    component:Admin
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
