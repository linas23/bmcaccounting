import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import NewRecord from '../views/billing/newrecord';
import Admin from '../views/admin.vue';
import AddStudent from '../views/studentForm.vue';
import getAllStudents from '../views/getAllStudents';
import getFaculty from '../views/getFaculty';
import studentsByFaculty from '../views/studentsByFaculty.vue';
import studentProfile from '../views/studentProfile.vue';
import billForm from '../views/billing/billForm';
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
  },
  {path:'/addStudent',name:'AddStudent',component:AddStudent},
  {path:'/getAllStudents',name:'getAllStudents',component:getAllStudents},
  {path:'/getAllStudents/:faculty',name:'getAllStudentsOfFaculty',component:studentsByFaculty},
  {path:'/getFaculty',name:'getFaculty',component:getFaculty},
  {path:'/profile/:name',name:'studentProfile',component:studentProfile},
  {path:'/billing',name:'billingForm',component:billForm}

  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
