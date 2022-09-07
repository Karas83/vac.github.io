<template>
  <div class="pagetittle">
    <h1>{{ tittle }}</h1>
  </div>
</template>

<script>
export default {
  name: "PageTittle",
  props: {
    tittle: String,
  },
};
</script>

<style scoped lang="scss">
.pagetittle {
  width: 85%;
  padding: 0.5% 7.5%;
  background-image: url(@/assets/tittlepagebg.png);
  background-size: cover;
  h1 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 800;
    font-size: 55px;
    line-height: 108.5%;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
}
@media (max-width: 600px) {
  .pagetittle {
    h1 {
      font-size: 35px;
    }
  }
}
</style>
