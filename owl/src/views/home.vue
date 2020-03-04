<template>
  <div id="homepage">
    <div class="heading center">
      <H5>
        A User Interface for recording the accounts of students of Bhaktapur Multiple Campus.
      </H5>
      <br>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla aperiam soluta tempora nesciunt officia at minima ipsam facere 
      voluptatem dolorem earum laboriosam fuga magni, fugiat hic totam dolore vitae sequi.
      voluptatem dolorem earum laboriosam fuga magni, fugiat hic totam dolore vitae sequi.
    </div>
    <div id="selections">
          <div class="card " v-for="(select,index) in selections" :key="index">
            <i :class="[select.icon]"></i>
            <h5 class="red-text">
              {{select.title}}
            </h5>
            <h6>
              {{select.description}}
            </h6>
          </div>
    </div>
    <div class="btns center">
      <router-link to="/createNewRecord" class="btn">
        create new record
      </router-link>
      <router-link to="/admin" class="btn">
        Admin
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return{
      // selections: 
    }
  },
  computed:{
    selections(){
      return this.$store.getters.selections
    }
  }

}
</script>

<style lang="scss" scoped>
    #homepage{
      background-color: #03423c;
      height: 90vh;
      color: white;
    }
    .heading{
      padding: 50px 200px;
    }
    #selections{
      padding: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .card{
      color: white;
      background-color: #111c31;
      word-wrap: break-word;
      width: 300px;
      height: 400px;
      padding: 0px 30px 50px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    .btns{
      .btn{
        margin: 10px;
      }
    }
</style>