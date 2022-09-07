<template>
  <div class="inventory-pass">
    <img class="inventory-pass-img" src="@/assets/Cars.png" alt="" />
    <div class="inventory-pass-text">
      <h1>Сhoose your dream vehicle in our catalog</h1>
      <div class="inventory-pass-text-info">
        <h2>
          In our catalogue there are many models of vehicles. Choose your car to
          your liking.
        </h2>
        <BlueButton @click="goToInventory" class="inventory-pass__BlueButton" ButtonText="Inventory" />
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from "@/components/BlueButton.vue";

export default {
  name: "InventoryPass",
  components: {
    BlueButton,
  },
  methods:{
    goToInventory() {
      this.$router.push("/inventory");
    },
  }
};
</script>

<style scoped lang="scss">
.inventory-pass {
  width: 85%;
  margin: 0 7.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: "Gilroy";
  font-style: normal;
}
.inventory-pass-img {
  width: 50%;
  margin: auto;
}
.inventory-pass-text {
  width: 40%;
  margin: 0 auto;
  h1 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456b;
    margin: 0 0 5% 0;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    margin: 0 0 5% 0;
  }
}

@media (max-width: 900px) {
  .inventory-pass-img {
    width: 100%;
    order: 1;
    margin: auto;
  }
  .inventory-pass-text {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    h1 {
      width: 50%;
    }
  }
  .inventory-pass-text-info {
    width: 40%;
    margin: 0 auto;
  }
  .inventory-pass__BlueButton {
    margin-top: 15%;
  }
}
@media (max-width: 600px) {
  .inventory-pass-text {
    h1 {
      width: 100%;
      font-size: 30px;
      line-height: 140.5%;
    }
  }
  .inventory-pass-text-info {
    width: 100%;
  }
    .inventory-pass__BlueButton {
    margin: 5% 0 10%;
    width: 100%;
  }
}
</style>
