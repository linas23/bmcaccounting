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
    ]
  },
  getters:{
    selections(state){
      return state.selections;
    },
    adminJobs(state){
      return state.adminJobs;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
