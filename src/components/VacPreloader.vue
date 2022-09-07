<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <img src="@/assets/logo.png" alt="" />
      <p>Loading ...</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "VacPreloader",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.overflow();
    this.showToggle();
  },
  methods: {
    overflow: function () {
      var className = "modal-open";
      document.body.classList.add(className);
    },
    showToggle() {
      setTimeout(() => {
        this.show = false;
        var className = "modal-open";
        document.body.classList.remove(className);
      }, 2000);
    },
  },
};
</script>

<style scoped lang="scss">
.preloader {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 9999;
  p {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #606276;
  }
}
</style>
