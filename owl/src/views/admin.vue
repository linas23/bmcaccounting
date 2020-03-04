
<template>
  <div id="admin">
      <div class="heading center">
          <h1>Manage your Students, Admin</h1>
      </div>
      <div class="container">
          <div class="card center" v-for="(job,index) in adminjobs"  :key="index">
              <div class="card-title white-text">
                {{job.description}}
              </div>
              <router-link :to="job.link">
                  <div class="btn red">
                      {{job.title}}
                  </div>
              </router-link>

          </div>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
        adminjobs(){
            return this.$store.getters.adminJobs;
        }
    }
}
</script>

<style lang="scss" scoped>
    #admin{
        background-color: #03423c;
        height: 90vh;
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