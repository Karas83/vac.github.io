<template>
  <div class="clientreviews">
    <h1>What our client say about us!</h1>
    <ClientSwiper />
  </div>
</template>

<script>
import ClientSwiper from "@/components/ClientSwiper.vue";

export default {
  name: "ClientReviews",
  components: {
    ClientSwiper,
  },
};
</script>

<style scoped lang="scss">
.clientreviews {
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 7.5%;
  font-family: "Gilroy";
  font-style: normal;
  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456b;
  }
}
  @media (max-width: 900px) {
.clientreviews {
  width: 95%;
   margin: 0 2.5%;
}
  }
</style>
