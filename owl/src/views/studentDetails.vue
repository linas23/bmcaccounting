
<template>
  <div id="studentDetails">
      <div class="container">
          <div class="card">
            <div class="card-title">
                Students details
            </div>
            <div class="card-content">
                faculty:
                <br>
                roll no
                <br>
                faculty:
                <br>
                roll no
                <br>
                faculty:
                <br>
                roll no
                <br>
                faculty:
                <br>
                roll no
                <br>
                faculty:
                <br>
                roll no
                <br>
                faculty:
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
        details(){
            return this.$store.getters.studentDetails;
        }
    },
    created(){
        const {name} = this.$route.params;
        this.$store.dispatch('getStudentDetails',name);
    }
}
</script>

<style lang="scss" scoped >

#studentDetails{
    min-height: 90vh;
    background-color: #03423c;
}
.container{
    padding: 5px 100px;
}
.card{
    height:85vh;
    padding: 10px;
}

</style>