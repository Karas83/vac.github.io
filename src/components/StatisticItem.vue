<template>
  <div class="statisticitem__cont">
    <h1>{{ stat }}</h1>
    <h2>{{ statinfo }}</h2>
  </div>
</template>

<script>
export default {
  name: "StatisticItem",
  props: {
    stat: String,
    statinfo: String,
  },
};
</script>

<style scoped lang="scss">
.statisticitem__cont {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
  
  border-radius: 5px;
  font-family: "Gilroy";
  font-style: normal;
  padding: 25px 0 21px 35px;
  height: 97px;
  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456b;
    margin: 0;
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
