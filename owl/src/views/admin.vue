
<template>
  <div id="admin">
      <div class="heading center white-text">
          <h3>Manage your Students, Admin</h3>
      </div>
        <sequential-entrance fromRight>
      <div class="container">
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
      </div>
        </sequential-entrance>
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
        height:120vh;
        font-family: 'Philosopher', sans-serif;
        max-width: 100vw;
        overflow: hidden;
        .heading{
            font-family: 'Changa', sans-serif;
            padding: 10px;

        }
        .container{
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