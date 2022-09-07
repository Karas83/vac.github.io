<template>
  <VacHeader />

  <div class="car-page">
    <div class="car-page-swiper">
      <h1>Porsche Panamera 4S</h1>
      <h2>Watching now 8 people</h2>

      <div class="swiper-cont">
        <swiper
          class="swiper1"
          :modules="[Thumbs, Virtual]"
          :thumbs="{ swiper: thumbsSwiper }"
          :slidesPerView="1"
          :spaceBetween="0"
          :virtual="false"
          :loop="false"
          @swiper="setSwiperRef"
        >
          <swiper-slide :virtualIndex="0"
            ><img src="@/assets/panamerae1.png" alt=""
          /></swiper-slide>
          <swiper-slide :virtualIndex="1"
            ><img src="@/assets/panamerae2.png" alt=""
          /></swiper-slide>
          <swiper-slide :virtualIndex="2"
            ><img src="@/assets/panamerae3.png" alt=""
          /></swiper-slide>
          <swiper-slide :virtualIndex="3"
            ><img src="@/assets/panamerae4.png" alt=""
          /></swiper-slide>
          <swiper-slide :virtualIndex="4"
            ><img src="@/assets/panamerae5.png" alt=""
          /></swiper-slide>
          <swiper-slide :virtualIndex="5"
            ><img src="@/assets/panamerai1.png" alt=""
          /></swiper-slide>
          <swiper-slide :virtualIndex="6"
            ><img src="@/assets/panamerai2.png" alt=""
          /></swiper-slide>
          <swiper-slide :virtualIndex="7"
            ><img src="@/assets/panamerai3.png" alt=""
          /></swiper-slide>
          <swiper-slide :virtualIndex="8"
            ><img src="@/assets/panamerai4.png" alt=""
          /></swiper-slide>
          <swiper-slide :virtualIndex="9"
            ><img src="@/assets/panamerai5.png" alt=""
          /></swiper-slide>
          <div class="but-cont">
            <button @click="slideTo(0)" class="but1">Exterior</button>
            <button @click="slideTo(5)" class="but2">Interior</button>
          </div>
        </swiper>

        <swiper
          class="swiper2"
          :spaceBetween="10"
          :modules="[Thumbs, Navigation, FreeMode]"
          @swiper="setThumbsSwiper"
          :slides-per-view="4"
          :freeMode="true"
          :loop="false"
          navigation
          watch-slides-progress
        >
          <swiper-slide :class="{ slide: isActive }"
            ><img src="@/assets/panamerae1.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/panamerae2.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/panamerae3.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/panamerae4.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/panamerae5.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/panamerai1.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/panamerai2.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/panamerai3.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/panamerai4.png" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/panamerai5.png" alt=""
          /></swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="car-page-tittle">
      <div class="info1">
        <div>
          <span>
            <h1>Price</h1>
            <h2>34 000 $</h2>
          </span>
        </div>
        <div>
          <span>
            <h1>Body</h1>
            <h3>Sedan</h3>
          </span>
          <span>
            <h1>Year</h1>
            <h3>2018</h3>
          </span>
        </div>
        <div>
          <span>
            <h1>Transmission</h1>
            <h3>Automatic</h3>
          </span>
          <span>
            <h1>Kilometres</h1>
            <h3>20 000</h3>
          </span>
        </div>
      </div>
      <hr />
      <div class="info1 info2">
        <div class="spec-div">
          <span>
            <h1>Detail</h1>
          </span>
        </div>
        <div>
          <span>
            <h4>Rear wheel drive</h4>
            <h4>6 cylinders</h4>
            <h4>11 l. per 100 km.</h4>
            <h4>Rear wheel drive</h4>
          </span>
          <span>
            <h4>2500-4000 rpm</h4>
            <h4>0-100 in 2.7 s.</h4>
            <h4>Power steering</h4>
            <h4>2500-4000 rpm</h4>
          </span>
        </div>
      </div>
      <hr />
      <div class="info3">
        <span>Description</span>
        <span
          >Porsche 911 - a sports car manufactured by the German company Porsche
          AG in the back of a two-door coupe or a convertible based on it,
          produced in different generations from 1964 to the present day.The 911
          index was not originally planned for the timeless designation of
          different generations of the same car, and was no more than one of
          many similar in the through three-digit internal factory numbering of
          all Porsche models assigned to a very specific 1964 model.
        </span>
        <BlueButton
          class="car-page__BlueButton"
          ButtonText="Request more information"
        />
      </div>
    </div>
  </div>

  <RentPrice />
  <VacFooter />
</template>

<script>
import { ref } from "vue";
import { Thumbs, Navigation, FreeMode, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/virtual";

import VacHeader from "@/components/Header.vue";

import RentPrice from "@/components/RentPrice.vue";
import VacFooter from "@/components/VacFooter.vue";
import BlueButton from "@/components/BlueButton.vue";

export default {
  name: "CarPage",
  components: {
    VacHeader,
    RentPrice,
    VacFooter,
    BlueButton,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    let swiperRef = null;

    const setSwiperRef = (swiper) => {
      swiperRef = swiper;
    };
    const slideTo = (index) => {
      swiperRef.slideTo(index);
    };

    return {
      FreeMode,
      Navigation,
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,

      swiperRef: null,

      setSwiperRef,
      slideTo,
      Virtual,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.car-page {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;
  padding: 0 7.5%;
  font-family: "Gilroy";
  font-style: normal;
  .swiper-cont {
    width: 100%;
    .swiper1 {
      img {
        width: 100%;
      }
      .but-cont {
        display: flex;
        flex-direction: row;
        position: absolute;
        z-index: 2;
        bottom: 4%;
        left: 2%;
        button {
          width: 115px;
          height: 30px;
          background: rgba(215, 215, 215, 0.2);
          border-radius: 2px;
          border: none;
          text-align: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          margin-left: 10px;
          color: white;
        }
        button:active,
        button:focus {
          color: black;
          background: #ffffff;
        }
      }
    }
    .swiper2 {
      margin-top: 1%;

      img {
        width: 100%;
      }
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
    }
  }
}
.car-page-swiper {
  display: flex;
  flex-direction: column;
  width: 52%;
  h1 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456b;
    margin: 0;
  }
  h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #606276;
    margin: 0 0 2.5%;
  }
}
.car-page-tittle {
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-top: 8%;
  h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #606276;
    margin: 0;
  }
  h2 {
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #7481ff;
    margin: 0;
  }
  h3 {
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456b;
    margin: 0;
  }
  h4 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456b;
    margin: 2.5% 0;
  }

  hr {
    margin: 0;
    color: #d7d7d7;
    margin: 5% 0;
  }
  .info1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 5%;
    }
    .spec-div {
      margin-top: 2.5%;
      margin-bottom: 0;
    }
    span {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  }
  .info3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2.5% 0 0;
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 180%;
      letter-spacing: 0.02em;
      color: #606276;
      margin: 2.5% 0 0;
    }
    .car-page__BlueButton {
      width: 60%;
      margin: 5% 0 0;
    }
  }
}
@media (max-width: 900px) {
  .car-page-swiper {
    width: 100%;
  }
  .car-page-tittle {
    width: 100%;
  }
}
@media (max-width: 600px) {
  .car-page {
    width: 95%;
    padding: 0 2.5%;
  }
  .car-page-tittle {
    .info2 {
      span {
        width: 100%;
      }
    }
    .info3 {
      .car-page__BlueButton {
        width: 100%;
      }
    }
  }
  .car-page .swiper-cont .swiper2 .swiper-button-next,
  .car-page .swiper-cont .swiper2 .swiper-button-prev {
    width: 35px;
    height: 35px;
    top: 60%;
  }
  .car-page .swiper-cont .swiper2 .swiper-button-next::after,
  .car-page .swiper-cont .swiper2 .swiper-button-prev::after {
    font-size: 18px;
  }
}
</style>
