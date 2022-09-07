<template>
  <VacHeader />
  <PageTittle tittle="Our blog" />

  <div class="blog-page-swiper-cont">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="breakpoints"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="sw in sws" :key="sw.kards">
        <InterestingBlogKard
          v-for="kard in sw.kards"
          :key="kard.img"
          v-bind:refpass="kard.refpass"
          v-bind:date="kard.date"
          v-bind:tittle="kard.tittle"
          v-bind:img="kard.img"
        />
      </swiper-slide>
    </swiper>
  </div>

  <VacFooter />
</template>

<script>
import InterestingBlogKard from "@/components/InterestingBlogKard.vue";

import { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import VacHeader from "@/components/Header.vue";
import VacFooter from "@/components/VacFooter.vue";
import PageTittle from "@/components/PageTittle.vue";

export default {
  name: "VacBlog",
  components: {
    VacHeader,
    VacFooter,
    PageTittle,
    Swiper,
    SwiperSlide,
    InterestingBlogKard,
  },

  setup() {
    return {
      modules: [Navigation, Pagination, A11y],

      sws: [
        {
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
              refpass: "/article",
            },
            {
              date: "10 May, 2020",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard4.png",
              refpass: "/article2",
            },
            {
              date: "11 May, 2010",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard5.png",
              refpass: "/article",
            },
            {
              date: "12 May, 2015",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard6.png",
              refpass: "/article2",
            },
            {
              date: "10 May, 2020",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard7.png",
              refpass: "/article",
            },
            {
              date: "11 May, 2010",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard8.png",
              refpass: "/article2",
            },
            {
              date: "12 May, 2015",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard9.png",
              refpass: "/article",
            },
          ],
        },
        {
          kards: [
            {
              date: "10 May, 2020",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard4.png",
              refpass: "/article2",
            },
            {
              date: "11 May, 2010",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard5.png",
              refpass: "/article",
            },
            {
              date: "12 May, 2015",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard6.png",
              refpass: "/article2",
            },
            {
              date: "10 May, 2020",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard7.png",
              refpass: "/article",
            },
            {
              date: "11 May, 2010",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard8.png",
              refpass: "/article2",
            },
            {
              date: "12 May, 2015",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard9.png",
              refpass: "/article",
            },
            {
              date: "10 May, 2020",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard1.png",
              refpass: "/article2",
            },
            {
              date: "11 May, 2010",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard2.png",
              refpass: "/article",
            },
            {
              date: "12 May, 2015",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard3.png",
              refpass: "/article2",
            },
          ],
        },
        {
          kards: [
            {
              date: "10 May, 2020",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard9.png",
              refpass: "/article",
            },
            {
              date: "11 May, 2010",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard8.png",
              refpass: "/article2",
            },
            {
              date: "12 May, 2015",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard7.png",
              refpass: "/article",
            },
            {
              date: "10 May, 2020",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard6.png",
              refpass: "/article2",
            },
            {
              date: "11 May, 2010",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard5.png",
              refpass: "/article",
            },
            {
              date: "12 May, 2015",
              tittle:
                "How to save on buying a car? Why is it better to buy from us",
              img: "blogkard4.png",
              refpass: "/article2",
            },
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
              refpass: "/article",
            },
          ],
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss">
.blog-page-swiper-cont {
  width: 85%;
  padding: 0 7.5%;
  margin: 2.5% 0;
  .swiper-wrapper {
    margin-bottom: 5%;
  }
  .blogckard {
    width: 33%;
    margin: 0 0 10px 0;
  }
}
.swiper-slide,
.swiper-slide-active {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

.swiper-pagination-bullet-active {
  background: #606276;
}
.blog-page-swiper-cont {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}

@media (max-width: 900px) {
  .blog-page-swiper-cont {
    .blogckard {
      width: 49%;
    }
  }
}
@media (max-width: 600px) {
  .blog-page-swiper-cont {
      .swiper-wrapper {
    margin-bottom: 15%;
  }
    .blogckard {
      width: 100%;
      margin: 0 0 20px 0;
    }
  }
}
</style>
