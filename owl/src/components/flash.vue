<template>
  <div id="flash" class="center" v-if="show">
      <h3>
        {{show}}
      </h3>
  </div>
</template>

<script>
export default {
    computed:{
        message(){
            return this.$store.getters.flashMessage;
        }
    },
    created(){
        this.$store.dispatch('removeFlash');
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