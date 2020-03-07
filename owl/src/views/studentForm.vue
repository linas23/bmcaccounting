<template>
<div id="studentForm">
  <div class="heading white-text center">
    <h3>
      Fill up the form for new student
    </h3>
  </div>
<sequential-entrance fromRight>

  <div class="container">
    <!-- <div class="error">
      <div class="card">
        error submitting the form
        <div v-if="!$v.details.name.required">
          hello
        </div>
      </div>
    </div> -->
    <form>
      <div class="row">
      
         <div class="input-field col s12">
          <select v-model="details.faculty">
            <option value="" disabled selected>Choose your faculty</option>
            <option value="BA">BA</option>
            <option value="BBA">BBA</option>
            <option value="BBS">BBS</option>
            <option value="BSc">BSc</option>
            <option value="BSc CSIT">BSc CSIT</option>
            <option value="BSW">BSW</option>
            <option value="BCA">BCA</option>
          </select>
          <label>Faculty</label>
        </div>
         <div class="input-field col s12">
          <select v-model="details.level">
            <option value="" disabled selected>Choose your level</option>
            <option value="1st sem">1st sem</option>
            <option value="2nd sem">2nd sem</option>
            <option value="3rd sem">3rd sem</option>
            <option value="4th sem">4th sem</option>
            <option value="5th sem">5th sem</option>
            <option value="6th sem">6th sem</option>
            <option value="7th sem">7th sem</option>
            <option value="8th sem">8th sem</option>
          </select>
          <label>Level</label>
        </div>
        <div class="input-field col s6" v-for="(field,index) in fields" :key="index">
          <i :class="[field.icon]"></i>
          <!-- {{field.model}} -->
          <input id="icon_prefix" type="text" v-model="details[field.model]">
          <label for="icon_prefix">{{field.label}}</label>
        </div>
      </div>
      <div class="center">
        <div class="btn" @click="saveStudent">
          Save
        </div>
      </div>
    </form>
  </div>
</sequential-entrance>
</div>
</template>

<script>
import {required,unique,} from 'vuelidate'
export default {
  data(){
    return{
      details:{
        firstName:'',
        lastName:'',
        faculty:'',
        rollno:'',
        email:'',
        address:'',
        phone:'',
        level:''
      }
    }
  },
  validations:{
    details:{
      firstName:{
        required
      },
      lastName:{
        required
      },
      faculty:{
        required
      },
      rollno:{
        required
      },
      email:{
        required,
        unique
      },
      level:{
        required
      },
      phone:{
        required
      },
      address:{
        required
      }
    }
  },
  computed:{
    fields(){
      return this.$store.getters.studentFields;
    }
  },
  methods:{
    saveStudent(){
      this.$store.dispatch('createNewStudent',this.details).then(()=>{
        this.$router.push('/admin');
      }).catch(err=>{
        console.log(err)
      });
    }
  },
  mounted(){
    M.AutoInit();
  }
}
</script>

<style lang="scss">

  #studentForm{
    height: 90vh;
    background-color: #03423c;
    .heading{
        font-family: 'Changa', sans-serif;
        padding: 10px;
    }
  }

</style>