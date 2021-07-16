<template>
  <div class="about">
    <Header :image="userProfileImg"/>

    <h1>This is an about page</h1>

    <div class="articleModal">
        <button class="a-spam">Report</button>
        <button class="a-unfollow">Unfollow</button>
        <button class="a-smessage">Go to post</button>
        <button class="a-cancel">Cancel</button>
    </div>

    <Footer />
  </div>
</template>
<script>

import Footer from '../components/footer.vue'
import Header from '../components/Header.vue'

export default {
  name : "Blog",
  components: { Footer, Header },
  data(){
    return{
      userProfileImg: require("@/assets/user.png"),
    }
  }

}
</script>


<style lang="scss">
.about{
    background: antiquewhite;
    height: 100vh;
}

</style>