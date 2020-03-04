<template>
  <div id="flash" class="center" v-if="flashMessage">
      <h3>
        {{flashMessage}}
      </h3>
  </div>
</template>

<script>
export default {
    computed:{
        flashMessage(){
            return this.$store.getters.flashMessage;
        }
    }
}
</script>

<style lang="scss">
    #flash{
        width: 100%;
        height: 8vh;
        padding: 8px;
        background-color: darkslategrey;
        color: white;
    }
</style>