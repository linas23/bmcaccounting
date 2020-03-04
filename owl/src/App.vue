<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Footer from "./components/footer"
export default {
  components:{
    Navbar,
    Footer
  },
  created(){
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