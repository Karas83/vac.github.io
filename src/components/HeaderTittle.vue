<template>
  <div class="header-tittle">
    <div class="header-tittle-text">
      <h1>The easiest way to buy a car in Canada</h1>
      <WhiteButton
        @click="goTo405"
        class="Request-suv"
        ButtonText="Request a suv"
      />
    </div>
    <HeaderSwiper />
    <WhiteButton
      @click="goTo405"
      class="Request-suv2"
      ButtonText="Request a suv"
    />
  </div>
</template>

<script>
import HeaderSwiper from "@/components/HeaderSwiper.vue";
import WhiteButton from "@/components/WhiteButton.vue";

export default {
  name: "HeaderTittle",
  components: {
    HeaderSwiper,
    WhiteButton,
  },
  methods: {
    goTo405() {
      this.$router.push("/405");
    },
  },
};
</script>

<style scoped lang="scss">
.header-tittle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-image: url(@/assets/Bgtittle.png);
  background-size: cover;
  height: 600px;
  h1 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 108.5%;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
}
.Request-suv {
  margin-bottom: 20%;
}
.Request-suv2 {
  display: none;
}
.header-tittle-text {
  margin: 0 7.5%;
  align-self: center;
  width: 35%;
}
.swiper-cont {
  margin: 0 2.5%;
  align-self: center;
  width: 45%;
}
@media (max-width: 900px) {
  .header-tittle {
    height: 100%;
  }
  .Request-suv {
    display: none;
  }
  .Request-suv2 {
    display: block;
    align-self: center;
    margin: 5% auto 20%;
  }
  .header-tittle-text {
    width: 80%;
    margin: 5% auto;
    h1 {
      text-align: center;
    }
  }
  .swiper-cont {
    margin: 0 5%;
    align-self: center;
    width: 90%;
  }
}
@media (max-width: 600px) {
  .header-tittle-text {
    width: 90%;
    margin: 5% auto;
    h1 {
      text-align: center;
      font-size: 35px;
      line-height: 108.5%;
    }
  }
}
</style>
