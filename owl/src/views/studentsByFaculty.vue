<template>
  <div id="studentsByFaculty">
      <div class="container">
          <div class="heading">
              <h3>
                  Students of {{faculty}}
              </h3>
          </div>
        <studentCard :students="students"> </studentCard>
      </div>
  </div>
</template>

<script>
import studentCard from '../components/studentCard';
export default {
    components:{
        studentCard
    },
    computed:{
        students(){
            return this.$store.getters.studentList;
        }
    },
    created(){
        const faculty = this.$route.params.faculty;
        this.faculty = faculty;
        this.$store.dispatch('getAllStudentsOfFaculty',faculty);
    }
}
</script>

<style lang="scss" scoped>
    #studentsByFaculty{
      background-color: #03423c;
      min-height:90vh;
    }
</style>