<template>
  <div id="faculty">
      <sequential-entrance fromLeft>
      <div class="container">
          <div tag="div" class="card" v-for="(faculty,index) in faculties" :key="index" @click="getAll(faculty)">
            <!-- <kinesis-element > -->
                <div class="faculty">
                    {{faculty}}    
                </div>   
            <!-- </kinesis-element>       -->
          </div>
      </div>
      </sequential-entrance>
  </div>
</template>

<script>
export default {
    computed:{
        faculties(){
            return this.$store.getters.faculties;
        }
    },
    methods:{
        getAll(faculty){
            this.$router.push({name:'getAllStudentsOfFaculty',params:{faculty}});
        }
    }
}
</script>

<style lang="scss" scoped>
    #faculty{
        min-height: 90vh;
        background-color: #03423c;
    }
    .container{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .card{
        background-image: url("../assets/images/tu.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 0px 0px 10px ;
        margin: 20px;
        height: 175px;
        width: 300px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        // font-size: 1.8rem;

        .faculty{
            font-size: 2.3rem;
            width: 30%;
            background: none;
            color: black;
        }
        
    }
    .card:hover{
        cursor: pointer;
        color:white;
        background-color: #08887b;
        transition: all 0.5s ease;
    }
</style>