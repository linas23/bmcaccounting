
<template>
  <div id="admin">
      <div class="heading center">
          <h1>Manage your Students, Admin</h1>
      </div>
      <div class="container">
        <sequential-entrance fromRight>
          <div class="card center" v-for="(job,index) in adminjobs"  :key="index">
              <div class="card-title white-text">
                  <!-- {{jobs[index]}} -->
                {{job.description}}
              </div>
              <router-link :to="job.link">
                  {{job.handle}}
                  <div class="btn red">
                      {{job.title}}
                  </div>
              </router-link>
          </div>
        </sequential-entrance>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // jobs:['addStudent','getAllStudents','nothing']
        }
    },
    computed:{
        adminjobs(){
            return this.$store.getters.adminJobs;
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    #admin{
        background-color: #03423c;
        height: 100vh;
        sequential-entrance{
            // padding: 10px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        .card{
            background-color: #08887b;
            box-shadow: 0px 0px 10px ;
            margin: 20px;
            height: 200px;
            width: 300px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }
</style>