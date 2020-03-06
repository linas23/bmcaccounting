import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const url = "http://localhost:3000/api/admin/";

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
        link:'addStudent',
      },
      {
        title:'Get all students',
        description:'Get the details of every students',
        link:'getAllStudents',
      },
      {
        title:'Search in Faculty',
        description:'Information about students in each faculty',
        link:'getFaculty',
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
      /* {
        icon:'fas fa-graduation-cap fa-3x prefix',
        label:'Faculty',
        model:'faculty'
      }, */
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
        icon:'fa fa-address-card  fa-3x prefix',
        label:'Address',
        model:'address'
      },
      {
        icon:'fas fa-phone fa-3x prefix',
        label:'Phone',
        model:'phone'
      },
    ],
    faculties:['BBA','BBS','BA','BSc','BSc CSIT','BCA'],
    flashMessage:'',
    studentProfile:{},
    studentList:[],
    billingStudent:{},
    fees:[
      {head:"monthly fee",amount:"2000"},
      {head:"library fee",amount:"200"},
      {head:"admissioin fee",amount:"200"}
    ]
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
    },
    faculties(state){
    return state.faculties;
    },
    listOfStudents(state){
      return state.listOfStudents;
    },
    studentDetails(state){
      return state.studentDetails;
    },
    studentList(state){
      return state.studentList;
    },
    studentProfile(state){
      return state.studentProfile;
    },
    billingStudent(state){
      return state.billingStudent;
    },
    fees(state){
      return state.fees;
    }
  },
  mutations: {
    setFlash(state,message){
      console.log(message);
      state.flashMessage = message;
    },
    removeFlash(state){
      state.flashMessage = null;
    },
    addStudents(state,students){
      students.forEach(el=>{
        state.studentList.push(el)
      })
    },
    clearStudents(state){
      state.studentList = [];
    },
    setProfile(state,profile){
      const news = {...profile};
      console.log(news)
      state.studentProfile = {...profile}
    },
    setBillingStudent(state,data){
      state.billingStudent = data;
    }
  },
  actions: {
    setFlash(context,payload){
      const message = payload;
      context.commit('setFlash',message)
      setTimeout(() => {
        context.commit('removeFlash');
      }, 3000);
    },
    getAllStudentsOfFaculty(context,faculty){
      //  query database and store to list of students
      context.commit('clearStudents');
      axios.get(url+"StudentsByFaculty/"+ faculty)
          .then(res=>{
            console.log(res.data.data);
            const students =  res.data.data;
            context.commit('addStudents',students);
          })
          .catch(err=>{
            console.log(err);
          })
    },
    getAllStudents(context,commit){
      context.commit('clearStudents')
      axios.get(url+ "getAllStudents")
            .then(res=>{
              const students = res.data.students;
              console.log(students)
              context.commit("addStudents",students)
            })
            .catch(err=>{
              context.dispatch('setFlash',"something went wrong")
            })
    },
    saveABill(context,details){
      //  save a bill in a database
    },
    createNewStudent(context,details){
      //  save a new student to database
      axios.post(url+"addNewStudent",details)
            .then(res=>{
              console.log(res);
              context.dispatch("setFlash","New student saved!!!");
            })
            .catch(err=>{
              console.log(err)
            });
    },
    getProfileDetails(context,id){
      console.log(id)
      // http://localhost:3000/api/admin/studentProfile/?id=5e61158dcbff623bfc2f3b70
      axios.get(url+"/studentProfile",{
          params:{
            id:id
          }
        })
        .then(res=>{
          const { profile } = res.data
          context.commit('setProfile',profile);
        })

    },
    searchStudent(context,payload){
        console.log(payload);
        const { f,r ,l} = payload;
        axios.get(url+ "/searchStudent",{
          params:{
            faculty:f,
            rollno:r,
            level:l
          }
        }).then(res=>{
          console.log(res)
          const data = res.data.data;
          console.log(data)
          context.commit('setBillingStudent',data);
        }).catch(err=>{
          console.log(err)
        })
    },
    verifyAndSave(context,payload){
      const {particulars,studentId} = payload;
      axios.post(url+"bill",{
        particulars,
        studentId
      }).then(res=>{
        console.log(res)
        context.commit('setFlash',"New Bill is saved.")
      }).catch(err=>{
        console.log(err)
      })
    }
    }
})
