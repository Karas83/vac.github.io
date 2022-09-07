
<template>
  <div class="client-swiper-cont">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      navigation
    >
      <swiper-slide>
        <div class="slide-cont">
          <div class="img-cont"></div>
          <div class="client-text">
            <h1>Laura Chaisson</h1>
            <h2>
              In irure et ipsum eiusmod adipisicing id elit cillum proident.
              Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt
              occaecat elit ullamco commodo exercitation. Anim mollit irure
              Lorem proident veniam excepteur non irure Lorem. Lorem esse sint
              in nisi id esse.
            </h2>
          </div>
        </div>
      </swiper-slide>
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
.client-swiper-cont {
  background: #ffffff;
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 53px;
    height: 53px;
    background-color: rgba($color: #7481ff, $alpha: 0.8);
    border-radius: 50px;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 30px;
    color: white;
  }
  .slide-cont {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .img-cont {
      width: 40%;
      background-image: url(@/assets/client.png);
      background-position: center;
      background-repeat: no-repeat;
    }
    .client-text {
      width: 50%;
      padding: 5% 5%;
      h1 {
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #606276;
      }
      h2 {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #41456b;
      }
    }
  }

  @media (max-width: 600px) {
    .slide-cont {
      .img-cont {
        width: 100%;
        height: 320px;
      }
      .client-text{
        width: 100%;
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 35px;
      height: 35px;
      top:25%;
    }
    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 15px;
      font-weight: 800;
    }
  }
}
</style>