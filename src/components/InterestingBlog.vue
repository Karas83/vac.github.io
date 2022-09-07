<template>
  <div class="interestingblog">
    <div class="interestingblog-tittle">
      <h1>Interesting to read</h1>
      <WhiteButton class="interestingblog-button" @click="goToBlog" ButtonText="all articles" />
    </div>
    <BlogSwiper />
    <WhiteButton
      class="interestingblog-button spec"
      ButtonText="all articles"
      @click="goToBlog"
    />
  </div>
</template>

<script>
import BlogSwiper from "@/components/BlogSwiper.vue";
import WhiteButton from "@/components/WhiteButton.vue";

export default {
  name: "InterestingBlog",
  components: {
    BlogSwiper,
    WhiteButton,
  },
  methods: {
    goToBlog() {
      this.$router.push("/blog");
    },
  },
};
</script>

<style scoped lang="scss">
.interestingblog {
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 10% 7.5%;
}
.interestingblog-tittle {
  display: flex;
  flex-direction: row;
  font-family: "Gilroy";
  font-style: normal;
  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456b;
  }
}
.interestingblog-button {
  width: 200px;
  height: 45px;
  margin: auto 0 auto auto;
}
.spec {
  display: none;
}
@media (max-width: 600px) {
  .interestingblog-tittle {
    h1 {
      font-size: 30px;
      line-height: 140.5%;
    }
  }
  .interestingblog-button {
    display: none;
  }
  .spec {
    display: block;
    width: 100%;
  }
}
</style>
