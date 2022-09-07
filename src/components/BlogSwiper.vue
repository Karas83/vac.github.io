
<template>
  <div class="blog-swiper-cont">
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="20"
      :breakpoints="breakpoints"
      navigation
    >
      <swiper-slide v-for="kard in kards" :key="kard.imgsrc">
        <InterestingBlogKard
          v-bind:refpass="kard.refpass"
          v-bind:date="kard.date"
          v-bind:tittle="kard.tittle"
          v-bind:img="kard.img"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import InterestingBlogKard from "@/components/InterestingBlogKard.vue";
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
    InterestingBlogKard,
  },

  setup() {
    return {
      modules: [Navigation, A11y],
      breakpoints: {
        1: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },

        901: {
          slidesPerView: 3,
        },
      },
      kards: [
        {
          date: "10 May, 2020",
          tittle:
            "How to save on buying a car? Why is it better to buy from us",
          img: "blogkard3.png",
          refpass: "/article",
        },
        {
          date: "11 May, 2010",
          tittle:
            "How to save on buying a car? Why is it better to buy from us",
          img: "blogkard2.png",
          refpass: "/article2",
        },
        {
          date: "12 May, 2015",
          tittle:
            "How to save on buying a car? Why is it better to buy from us",
          img: "blogkard1.png",
          refpass: "/article3",
        },
      ],
    };
  },
};
</script>
<style  lang="scss">
.blog-swiper-cont {
  margin-top: 5%;
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
    display: none;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 30px;
    color: white;
  }
}
@media (max-width: 600px) {
  .blog-swiper-cont {
    .swiper-button-prev,
    .swiper-button-next {
      width: 35px;
      height: 35px;
      top: 50%;
      display: flex;
    }
    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 15px;
      font-weight: 800;
    }
  }
}
</style>