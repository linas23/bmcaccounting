<template>
  <div id="flash" class="center" v-if="message">
      <h3>
        {{message}}
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
        setTimeout(() => {
            console.log('hello there')
            this.$store.dispatch("removeFlash");
        }, 3000);
    }
}
</script>

<style lang="scss">
    #flash{
        font-family: 'Changa', sans-serif;
        width: 100%;
        height: 8vh;
        padding: 8px;
        background-color: darkslategrey;
        color: white;
    }
</style>