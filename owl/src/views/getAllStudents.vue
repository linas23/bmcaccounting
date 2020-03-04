<template>
  <div id="getAllStudents">
      <div class="container">
          <div class="heading" v-show="faculty">
              <h3>
                  Students of {{faculty}}
              </h3>
          </div>
        <div class="card" @click="viewDetails('sanil')">
            <div class="title">
                linas 23
            </div>
            <div class="content">
                ittachhen-15 bhaktapur
                <br>
                email@email.com
                <br>
                faculty: Bsc. CSIT
            </div>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            faculty:null
        }
    },
    methods:{
        viewDetails(name){
            console.log(name);
            this.$router.push({name:'studentDetails',params:{name}})
        }
    },
    computed:{
        students(){
            return this.$store.getters.listOfStudents;
        }
    },
    created(){
        if(this.$route.params){
            // console.log(this.$route.params)
            const faculty = this.$route.params.faculty;
            console.log(faculty);
            this.faculty = faculty;
            this.$store.dispatch('getAllStudentsOfFaculty',faculty)
        }
    }
}
</script>

<style lang="scss">
    #getAllStudents{
      background-color: #03423c;
      min-height:90vh;
    }
    .container{
        padding:20px 0px;

        .card{
            height:150px;
            .title{
                padding: 5px 30px;
                font-size: 1.5rem;
            }
            .content{
                padding: 5px 30px;
                margin: 0px;
            }
        }
    }
</style>