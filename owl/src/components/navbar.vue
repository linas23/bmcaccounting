<template>
  <div>
      <nav class="container-fluid">
            <div class="nav-wrapper">
                <a class="brand-logo">
                    <router-link to="/">
                        <i class="material-icons">school</i>
                        BMC Accounting
                    </router-link>
                </a>
                <div class="center college col s12">
                    Bhaktapur  Multiple  Campus
                </div>
            </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Nosifer&display=swap');

    .container-fluid{
        height: auto;
    }
    .nav-wrapper{
        background-color:#234543;
        .brand-logo{
            padding: 10px 125px;
            font-size: 1.5rem;
        }
        .college{
            padding: 10px;
            font-size: 2.3rem;
            font-family: 'Nosifer', cursive;
        }
    }
</style>