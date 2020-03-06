<template>
  <div>
    <Navbar></Navbar>
    <flash :show="flashMessage"></flash>
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
    flashMessage(){
            return this.$store.getters.flashMessage;
        }
  }
}
</script>

<style lang="scss">
  *{
    box-sizing: border-box;
    padding:0px;
    margin: 0px;
    // color: white;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0px;
  }
</style>