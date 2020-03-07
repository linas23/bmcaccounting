<template>
  <div>
    <Navbar></Navbar>
    <flash v-if="show"></flash>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import flash from "./components/flash"
export default {
  components:{
    Navbar,
    Footer,
    flash
  },
  computed:{
    show(){
      return this.$store.getters.flashMessage;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Caveat|Changa|Merriweather|Philosopher|Roboto+Slab|Trade+Winds&display=swap');
  *{
    box-sizing: border-box;
    padding:0px;
    margin: 0px;
    // color: white;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0px;
  }
/* font-family: 'Roboto Slab', serif;
font-family: 'Merriweather', serif;
font-family: 'Trade Winds', cursive;
font-family: 'Caveat', cursive;
font-family: 'Changa', sans-serif;
font-family: 'Philosopher', sans-serif; */
</style>
