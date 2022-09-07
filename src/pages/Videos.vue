<template>
  <VacHeader />
  <PageTittle tittle="Vehicle videos" />

  <div class="video-swiper-cont">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="breakpoints"
      navigation
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <div class="slide-cont">
          <VideoKard
            class="videokard"
            @click="showModal"
            tittle="VAC's Vehicle Shoot #01: 2013 Hyundai Veloster"
            videoimg="videoimg1.png"
          />
          <VideoKard
            class="videokard"
            @click="showModaltwo"
            tittle="VAC's Vehicle Shoot #02: 2013 Honda Civic SI"
            videoimg="videoimg2.png"
          />
          <VideoKard
            class="videokard"
            @click="showModalthree"
            tittle="VAC's Vehicle Shoot #03: 2017 Honda Civic Type R"
            videoimg="videoimg3.png"
          />
          <VideoKard
            class="videokard"
            @click="showModalfour"
            tittle="VAC's Vehicle Shoot #04: 2013 Chrysler Town and Country"
            videoimg="videoimg4.png"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-cont">
          <VideoKard
            class="videokard"
            @click="showModalfive"
            tittle="VAC's Vehicle Shoot #05: 2016 Ram Laramie 5.7L Hemi"
            videoimg="videoimg5.png"
          />
          <VideoKard
            class="videokard"
            @click="showModalsix"
            tittle="VAC's Vehicle Shoot #06: 2015 GMC Sierra"
            videoimg="videoimg6.png"
          />
          <VideoKard
            class="videokard"
            @click="showModalseven"
            tittle="VAC's Vehicle Shoot #07: 2015 Chevy Equinox"
            videoimg="videoimg7.png"
          />
          <VideoKard
            class="videokard"
            @click="showModaleight"
            tittle="VAC's Vehicle Shoot #08: Cadillac"
            videoimg="videoimg8.png"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <VideoModal />
  <VacFooter />

  <video-modal ref="modal"></video-modal>

  <video-modal ref="modaltwo">
    <template v-slot:body>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/6d1S2zh0loY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
  </video-modal>

  <video-modal ref="modalthree">
    <template v-slot:body>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/UReju0OT5uY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
  </video-modal>

  <video-modal ref="modalfour">
    <template v-slot:body>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/KNpaJPIsyhk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
  </video-modal>

  <video-modal ref="modalfive">
    <template v-slot:body>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/S9PjHHwmHbA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
  </video-modal>

  <video-modal ref="modalsix">
    <template v-slot:body>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/p7cw0KWL4xg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
  </video-modal>

  <video-modal ref="modalseven">
    <template v-slot:body>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/M5hQf0RWGZ4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
  </video-modal>

  <video-modal ref="modaleight">
    <template v-slot:body>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/fl9NZP2do_g"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
  </video-modal>
</template>

<script>
import { Navigation, Pagination, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import VideoModal from "@/components/VideoModal.vue";
import VideoKard from "@/components/VideoKard.vue";

import VacHeader from "@/components/Header.vue";
import VacFooter from "@/components/VacFooter.vue";
import PageTittle from "@/components/PageTittle.vue";

export default {
  name: "VacVideos",
  components: {
    VacHeader,
    VacFooter,
    PageTittle,
    VideoKard,
    VideoModal,
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [Navigation, Pagination, A11y],
    };
  },

  methods: {
    showModal: function () {
      this.$refs.modal.show = true;
      var className = "modal-open";
      document.body.classList.add(className);
    },
    showModaltwo: function () {
      this.$refs.modaltwo.show = true;
      var className = "modal-open";
      document.body.classList.add(className);
    },
    showModalthree: function () {
      this.$refs.modalthree.show = true;
      var className = "modal-open";
      document.body.classList.add(className);
    },
    showModalfour: function () {
      this.$refs.modalfour.show = true;
      var className = "modal-open";
      document.body.classList.add(className);
    },
    showModalfive: function () {
      this.$refs.modalfive.show = true;
      var className = "modal-open";
      document.body.classList.add(className);
    },
    showModalsix: function () {
      this.$refs.modalsix.show = true;
      var className = "modal-open";
      document.body.classList.add(className);
    },
    showModalseven: function () {
      this.$refs.modalseven.show = true;
      var className = "modal-open";
      document.body.classList.add(className);
    },
    showModaleight: function () {
      this.$refs.modaleight.show = true;
      var className = "modal-open";
      document.body.classList.add(className);
    },
  },
};
</script>

<style lang="scss">
.video-swiper-cont {
  width: 85%;
  padding: 0 7.5%;
  margin: 2.5% 0;
}
.slide-cont {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  .videokard {
    width: 48%;
    margin: 1%;
  }
}
.swiper-pagination-bullet-active {
  background: #606276;
}
.video-swiper-cont{
.swiper-button-next,
.swiper-button-prev {
  display: none;
}
}

@media (max-width: 900px) {
  .slide-cont {
    flex-direction: column;
    height: 100%;
  .videokard {
    width: 100%;

  }
}
}

</style>
