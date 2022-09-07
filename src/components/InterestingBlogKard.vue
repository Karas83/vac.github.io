<template>
  <router-link class="blogckard" :to="refpass">
    <img v-bind:src="require('../assets/' + img)" alt="" />
    <div class="blogckard-info">
      <h1>{{ date }}</h1>
      <h2>{{ tittle }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "InterestingBlogKard",
  components: {},
  props: {
    date: String,
    tittle: String,
    img: String,
    refpass: String,
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.blogckard {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 5px;
  font-family: "Gilroy";
  font-style: normal;
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
  margin: 0 0 10%;
  img {
    width: 100%;
  }
}
.blogckard-info {
  padding: 5%;
  h1 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    margin: 0;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456b;
    margin: 0;
  }
}
@media (max-width: 900px) {
}
</style>
