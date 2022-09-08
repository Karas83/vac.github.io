<template>
  <div class="video-modal">
    <transition name="slide-fade">
      <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal-close" @click="closeModal">&#10006;</div>
        <div class="modal">
          <slot name="body">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/c4UrAkkwbmY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: "VideoModal",
  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    closeModal: function () {
      this.show = false;
      var className = "modal-open";
      document.body.classList.remove(className);
    },
  },
};
</script>
 
<style scoped
       lang="scss">
.video-modal {
  .modal-shadow {
    overflow: auto;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
  }

  .modal {
    background: #fff;
    width: 60%;
    height: 60%;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;

    &-close {
      position: absolute;
      top: 10%;
      right: 15%;
      color: white;
      cursor: pointer;
      font-size: 35px;
    }
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
  }
  @media (max-width: 900px) {
    .modal {
      width: 80%;
      height: 40%;
      &-close {
        top: 24%;
        right: 10%;
      }
    }
  }
  @media (max-width: 600px) {
    .modal {
      width: 95%;
      height: 30%;

      &-close {
        top: 30%;
        right: 2%;
      }
    }
  }
}
</style>
