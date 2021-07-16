<template>
  <div class="notFound">
    <Header :image="userProfileImg"/>

    <div class="notFound__info">
        <h1 class="notFound__title">Sorry, this page isn't available.</h1>
        <p class="notFound__label">The link you followed may be broken, or the page may have been removed. Go back to <a href="/">Instagram</a>.</p>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/footer.vue'
import Header from '../components/Header.vue'
export default {
  name: 'NotFound',
  components: {Header, Footer},
  data(){
      return{
          userProfileImg: require("@/assets/user.png"),
      }
  }
}
</script>


<style lang="scss">
.notFound{
    height: 100vh;
    &__info{
        text-align: center;
        padding-top: 120px;
        color: #262626;
    }
    &__title{
        font-size: 22px;
        line-height: 26px;
        font-weight: 500;
    }
    &__label{
        margin: 40px 0 20px;
    }
}
</style>