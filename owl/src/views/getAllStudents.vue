<template>
  <div id="getAllStudents">
      <div class="container">
        <div class="heading white-text">
            <h3>
                All students of BMC
            </h3>
        </div>
          <div class="row">
            <studentCard :students="students"> </studentCard>
          </div>
      </div>
  </div>
</template>

<script>
import studentCard from '../components/studentCard';
export default {
    
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

    }
    .container{
        padding: 20px 0px;

        .heading{
            font-family: 'Changa', sans-serif;
        }
    }
</style>