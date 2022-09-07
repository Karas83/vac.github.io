
<template>
  <div class="swiper-cont">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      navigation
    >
      <swiper-slide>
        <div class="slide-cont">
          <img src="@/assets/suv.png" alt="" /></div
      ></swiper-slide>
      <swiper-slide>
        <div class="slide-cont">
          <img src="@/assets/car.png" alt="" /></div
      ></swiper-slide>
      <swiper-slide>
        <div class="slide-cont">
          <img src="@/assets/truck.png" alt="" /></div
      ></swiper-slide>
      <swiper-slide>
        <div class="slide-cont">
          <img src="@/assets/van.png" alt="" /></div
      ></swiper-slide>
    </swiper>
  </div>
</template>
<script>
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, A11y],
    };
  },
};
</script>
<style  lang="scss">
.swiper-cont {
  .swiper-button-next,
  .swiper-button-prev {
    width: 53px;
    height: 53px;
    background-color: rgba($color: #ffffff, $alpha: 0.8);
    border-radius: 50px;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 30px;
  }
  .slide-cont {
    img {
      width: 75%;
      margin-left: 12%;
    }
  }
  @media (max-width: 600px) {
    .swiper-button-prev,
    .swiper-button-next {
      width: 35px;
      height: 35px;
    }
    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 15px;
      font-weight: 800;
    }
  }
}
</style>