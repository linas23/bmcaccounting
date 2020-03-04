<template>
<div id="studentForm">
  <div class="heading">
    <h3>
      Enter the details
    </h3>
  </div>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6" v-for="(field,index) in fields" :key="index">
          <i :class="[field.icon]"></i>
          <!-- {{field.model}} -->
          <input id="icon_prefix" type="text" v-model="details[field.model]">
          <label for="icon_prefix">{{field.label}}</label>
        </div>
      </div>
    </form>
    <div class="center">
      <div class="btn" @click="saveStudent">
        Save
      </div>
    </div>
  </div>
</div>
</template>

<script>
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
        phone:''
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
      console.log(this.details.firstName);
      this.$store.dispatch('createNewStudent',this.details);
      // this.$store.dispatch("setFlash","new student saved")
    }
  }
}
</script>

<style lang="scss">

  #studentForm{
    height: 90vh;
    background-color: #03423c;

    
  }

</style>