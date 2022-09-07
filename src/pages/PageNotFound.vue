<template>
  <div class="pagenotfound">
    <img class="how-work__car1" src="@/assets/404.png" alt="" />
    <h1>404 page</h1>
    <h2>Page not found or such pages do not exist.</h2>
    <BlueButton
      @click="goToHome"
      class="Error__BlueButton"
      ButtonText="go home"
    />
  </div>
</template>

<script>
import BlueButton from "@/components/BlueButton.vue";

export default {
  name: "PageNotFound",
  components: {
    BlueButton,
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scope lang="scss">
.pagenotfound {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-family: "Gilroy";
  font-style: normal;
  letter-spacing: 0.02em;
  img {
    width: 20%;
    margin: 5% auto;
  }
  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456b;
    text-align: center;
    margin: 0;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    text-align: center;
    color: #606276;
    margin: 0;
  }
  .Error__BlueButton {
    width: 40%;
    margin: 5% auto;
  }
}
@media (max-width: 900px) {
  .pagenotfound {
    width: 70%;
    .Error__BlueButton {
      margin: 10% auto;
    }
  }
}
@media (max-width: 600px) {
  .pagenotfound {
    width: 60%;
    img {
      width: 70%;
    }
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 16px;
    }
    .Error__BlueButton {
      width: 100%;
      margin: 15% auto;
    }
  }
}
</style>
