<template>
  <div id="homepage">
    <div class="heading center">
      <h4>
        A User Interface for recording the accounts of students of 
        <br>
        <strong>
          Bhaktapur Multiple Campus.
        </strong>
      </h4>
    </div>
    <sequential-entrance fromBottom>
    <div id="selections">
          <div class="card " v-for="(select,index) in selections" :key="index">
            <i :class="[select.icon]"></i>
            <h4 class="red-text">
              {{select.title}}
            </h4>
            <h6>
              {{select.description}}
            </h6>
          </div>
    </div>
    </sequential-entrance>
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
      min-height: 90vh;
      color: white;
      font-family: 'Merriweather', serif;

    }
    .heading{
      padding: 50px 200px;
      strong{
        font-family: 'Trade Winds', cursive;
        font-size: 2.3rem;
      }
    }
    #selections{
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      font-family: 'Caveat', cursive; 
        h6{
           font-family: 'Roboto Slab', serif;
        }
    }
    .card{
      color: white;
      background-color: #111c31;
      word-wrap: break-word;
      width: 20%;
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