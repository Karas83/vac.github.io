<template>
  <div class="advantages">
    <h1 class="advantages-tittle">Advantages of working with us</h1>
    <div class="advantages-cont">
      <div class="advantages-cont-item advantages-cont-item1">
        <div class="advantages-cont-item-text">
          <img src="@/assets/delivery.png" alt="" />
          <h2>Vehicle Delivery</h2>
          <h3>
            We deliver your vehicle directly to your door. You don’t sign
            anything until you test drive the vehicle. There is never any
            obligation to buy beforehand.
          </h3>
        </div>
      </div>

      <div class="advantages-cont-item advantages-cont-item2">
        <div class="advantages-cont-item-text advantages-cont-item-text2">
          <img src="@/assets/finance.png" alt="" />
          <h2>Auto Financing</h2>
          <h3>
            We partner with the largest lenders in Canada to offer the strongest
            financing options in the industry—including rates as low as 4%
          </h3>
        </div>
      </div>

      <div class="advantages-cont-item advantages-cont-item3">
        <div class="advantages-cont-item-text">
          <img src="@/assets/invent.png" alt="" />
          <h2>Huge Inventory</h2>
          <h3>
            We have access to thousands of high-quality vehicles and offer them
            to you at wholesale prices. Your dream car is waiting for you
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvantagesInfo",
};
</script>

<style scoped lang="scss">
.advantages {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 10% 7.5%;
}
.advantages-cont {
  position: relative;
  margin-bottom: 30%;
}
.advantages-tittle {
  font-family: "Gilroy";
  font-style: normal;
  width: 100%;
  font-weight: 700;
  font-size: 45px;
  line-height: 140.5%;
  color: #41456b;
  margin-bottom: 5%;
}
.advantages-cont-item {
  position: absolute;
  width: 480px;
  height: 430px;
  font-family: "Gilroy";
  font-style: normal;
  background-image: url(@/assets/triangelbg.png);
  background-size: cover;
  background-position: center;
}
.advantages-cont-item-text {
  margin: 135px auto 0;
  width: 65%;
  text-align: center;
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.02em;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #606276;
  }
}
.advantages-cont-item1 {
  left: 0;
}
.advantages-cont-item2 {
  left: 0;
  right: 0;
  margin: auto;
  background-image: url(@/assets/triangelbg2.png);
}
.advantages-cont-item3 {
  right: 0;
}
.advantages-cont-item-text2 {
  margin: 10px auto 0;
  width: 42%;
}
@media (max-width: 1280px) {
  .advantages-cont {
    margin-bottom: 0;
  }
  .advantages-cont-item {
    position: relative;
    margin: 0 auto;
  }
  .advantages-cont-item2 {
    background-image: url(@/assets/triangelbg.png);
  }
  .advantages-cont-item-text {
    padding-top: 30%;
    margin: 0 auto;
  }
  .advantages-cont-item-text2 {
    margin: 0 auto;
    width: 65%;
  }
}
@media (max-width: 900px) {
  .advantages-tittle {
    text-align: center;
  }
}
@media (max-width: 600px) {
  .advantages-tittle {
    font-size: 30px;
    line-height: 140.5%;
    margin-top: 20%;
  }
  .advantages-cont-item {
    background: none;
    width: 100%;
    height: 100%;
    margin: 10% 0;
  }
  .advantages-cont-item2 {
    background: none;
    margin: 10% 0;
  }
  .advantages-cont-item-text {
    padding-top: 0;
    margin: 50 auto;
    width: 100%;
  }
  .advantages-cont-item-text2 {
    padding-top: 0;
    margin: 0 auto;
    width: 100%;
  }
}
</style>
