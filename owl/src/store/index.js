import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selections:[
      {
        title:"Verifying the bill",
        description:"Have a look at the bill from student issued by a bank.",
        icon:"fas fa-book-open fa-4x white-text"
      },
      {
        title:"Data entry",
        description:"Have a record for future. Secure future is better future.",
        icon:"far fa-clipboard fa-4x white-text"

      },
      {
        title:"Data Storage",
        description:"Don't worry, your datas are in safe hand.",
        icon:"fas fa-database fa-4x white-text"

      },
      {
        title:"Admin",
        description:"Are you an admin?",
        icon:"fas fa-user-circle fa-4x white-text"

      }
    ],
    adminJobs:[
      {
        title:'Add a student',
        description:"Enter the record for new Student",
        link:'addStudent'
      },
      {
        title:'Get all students',
        description:'Get the details of every students',
        link:'getAllStudents'
      },
      {
        title:'Search in Faculty',
        description:'Information about students in each faculty',
        link:'search'
      }
    ],
    studentForm:[
      {
        icon:'fas fa-user-circle fa-3x prefix',
        label:'First Name',
        model:'firstName'
      },
      {
        icon:'fas fa-user-circle fa-3x prefix',
        label:'Last Name',
        model:'lastName'

      },
      {
        icon:'fas fa-graduation-cap fa-3x prefix',
        label:'Faculty',
        model:'faculty'
      },
      /* 
      {
        icon:'fas fa-layer-group fa-3x prefix',
        label:'Level',
        model:'level'
      }, */
      {
        icon:'fas fa-sort-numeric-down fa-3x prefix',
        label:'Roll no',
        model:'rollno'
      },
      {
        icon:'fa fa-envelope fa-3x prefix',
        label:'Email',
        model:'email'
      },
      {
        icon:'fa fa-address-book fa-3x prefix',
        label:'Address',
        model:'address'
      },
      {
        icon:'fas fa-phone fa-3x prefix',
        label:'Phone',
        model:'phone'
      },
    ],
    flashMessage:''
  },
  getters:{
    selections(state){
      return state.selections;
    },
    adminJobs(state){
      return state.adminJobs;
    },
    studentFields(state){
      return state.studentForm;
    },
    flashMessage(state){
      return state.flashMessage;
    }
  },
  mutations: {
    setFlash(state,message){
      console.log(message);
      state.flashMessage = message;
    },
    removeFlash(state){
      state.flashMessage = null;
    }
  },
  actions: {
    setFlash(context,payload){
      const message = payload;
      context.commit('setFlash',message)

      setTimeout(() => {
        context.commit('removeFlash');
      }, 3000);
    }
  }
})
