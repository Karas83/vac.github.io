<template>
  <router-link class="blogckard" :to="refpass">
    <img v-bind:src="require('../assets/' + img)" alt="" />
    <div class="blogckard-info">
      <h1>{{ make }}{{ model }}</h1>
      <h2>$ {{ price }}</h2>
      <div class="car-props">
        <h3>{{ year }} year</h3>
        <h3>{{ body }}</h3>
        <h3>{{ transmission }}</h3>
        <h3>{{ kilometre }} kilometres</h3>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CarKard",
  components: {},
  props: {
    make: String,
    model: String,
    price: String,
    year: String,
    body: String,
    transmission: String,
    kilometre: String,
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
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456b;
    margin: 0;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #7481ff;
    margin: 5% 0 7.5% 0;
  }
}
.car-props {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #41456b;
    
    margin: 0 5% 2% 0;
  }
}

</style>
