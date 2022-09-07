<template>
  <div class="videokard">
    <img v-bind:src="require('../assets/' + videoimg)" alt="" />
    <h1>{{ tittle }}</h1>
  </div>
</template>

<script>
export default {
  name: "VideoKard",
  components: {},
  props: {
    tittle: String,
    videoimg: String,
  },
};
</script>

<style scoped lang="scss">
.videokard {
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    width: 100%;
    height: 80%;
  }
  h1 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456b;
  }
}

</style>
