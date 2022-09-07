<template>
  <div class="how-work">
    <div class="how-work__text-cont">
      <div class="how-work__text">
        <h1>How does it work?</h1>
        <h2>From your Phone to your Home</h2>
        <h3>
          We make it easy for you to buy your dream car from your phone without
          ever having to step into a dealership! We deliver your vehicle to your
          home for you to test drive before you sign anything.
        </h3>
      </div>
    </div>
    <div class="how-work__img-cont">
      <img class="how-work__car1" src="@/assets/Lexusbg.png" alt="" />
      <img class="how-work__car2" src="@/assets/Hondabg.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HowWork",
};
</script>

<style scoped lang="scss">
.how-work {
  width: 100%;
  .how-work__text-cont {
    position: relative;
    width: 100%;
    height: 1px;
  }
  .how-work__img-cont {
    position: relative;
    width: 100%;
    height: 450px;
    overflow: hidden;
  }
  .how-work__text {
    z-index: 2;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: -40px;
    font-family: "Gilroy";
    font-style: normal;
    width: 30%;
    padding: 80px;
    background: #ffffff;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    h1 {
      font-weight: 700;
      font-size: 45px;
      line-height: 140.5%;
      text-align: center;
      color: #41456b;
      margin: 0;
    }
    h2 {
      font-weight: 700;
      font-size: 30px;
      line-height: 140%;
      text-align: center;
      color: #7481ff;
      margin: 0;
    }
    h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 180%;
      text-align: center;
      letter-spacing: 0.02em;
      color: #606276;
      margin: 20px 0 0;
    }
  }
  .how-work__car1 {
    width: 30%;
    position: absolute;
    right: 0;
  }
  .how-work__car2 {
    width: 30%;
    position: absolute;
    left: 0;
    top: 150px;
  }
}
@media (max-width: 900px) {
  .how-work {
    .how-work__text {
      width: 60%;
      padding: 40px;
    }
    .how-work__img-cont {
      margin-top: 180px;
    }
    .how-work__car1 {
      right: -100px;
      width: 45%;
    }
    .how-work__car2 {
      left: -40px;
      top: 160px;
      width: 45%;
    }
  }
}
@media (max-width: 600px) {
  .how-work {
    .how-work__text {
      width: 90%;
      padding: 10px;
      h1 {
        font-size: 30px;
        line-height: 140.5%;
      }
      h2 {
        font-size: 24px;
        line-height: 140%;
        width: 60%;
        margin: 0 auto;
      }
    }

    .how-work__img-cont {
      margin-top: 225px;
      height: 422px
    }
    .how-work__car1 {
      right: -100px;
      width: 80%;
    }
    .how-work__car2 {
      left: -66px;
      top: 190px;
      width: 80%;
    }
  }
}
</style>
