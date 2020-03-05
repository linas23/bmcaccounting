<template>
  <div id="getAllStudents">
      <div class="container">
        <studentCard :students="students"> </studentCard>
      </div>
  </div>
</template>

<script>
import studentCard from '../components/studentCard';
export default {
    /* methods:{
        viewDetails(name){
            this.$router.push({name:'studentDetails',params:{name}})
        }
    }, */
    computed:{
        students(){
            return this.$store.getters.studentList;
        }
    },
    components:{
        studentCard
    },
    created(){
        this.$store.dispatch('getAllStudents');
    }
}
</script>

<style lang="scss" scoped>
    #getAllStudents{
      background-color: #03423c;
      margin: 0px;
    }
    .container{
        padding: 20px 0px;
    }
</style>