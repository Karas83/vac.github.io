<template>
  <div class="item-cont">
    <div class="item-numb">{{ ItemNumb }}</div>
    <div class="item-text">
      <h1>{{ ItemText1 }}</h1>
      <h2>{{ ItemText2 }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerfectCarItem",
  props: {
    ItemNumb: Number,
    ItemText1: String,
    ItemText2: String,
  },
};
</script>

<style scoped lang="scss">
.item-cont {
  display: flex;
  flex-direction: row;
  font-family: "Gilroy";
  font-style: normal;
}
.item-numb {
  min-width: 75px;
  min-height: 67px;
  background-image: url(@/assets/itembg.png);
  background-size: cover;
  background-position: center;
  font-weight: 700;
  font-size: 25px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #41456b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
.item-text {
  margin:  2.5%;
  width: 100%;
  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456b;
    margin: 0 0 2.5% 0;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    margin: 0;
  }
}
</style>
