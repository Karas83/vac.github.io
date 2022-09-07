<template>
  <div class="rentprice">
    <div class="rentprice-tittle">
      <h1>Let’s figure out how much you can afford</h1>
      <h2>
        Before you start shopping, let’s figure out how much you can afford.
        Move the sliders to see how the loan duration and the total loan amount
        affect your monthly payments.
      </h2>
    </div>
    <div class="rent-culc">
      <div class="rent-culc-sliders">
        <div class="rent-culc-buttons">
          <WhiteButton
            class="button"
            ButtonText="poor"
            v-on:click="(cost = 100000), (month = 50)"
          />
          <WhiteButton
            class="button"
            ButtonText="average"
            v-on:click="(cost = 300000), (month = 36)"
          />
          <WhiteButton
            class="button"
            ButtonText="good"
            v-on:click="(cost = 500000), (month = 12)"
          />
        </div>

        <div class="rent-culc-slider">
          <h1>Loan Amount</h1>
          <h2>$ {{ cost }}</h2>
          <input
            class="cost"
            v-model.number="cost"
            type="range"
            min="100"
            max="600000"
            step="100"
          />
        </div>

        <div class="rent-culc-slider">
          <h1>Loan Duration</h1>
          <h2>{{ month }} <span>month</span></h2>
          <input
            class="weaks"
            v-model.number="month"
            type="range"
            min="1"
            max="72"
            step="1"
          />
        </div>
      </div>
      <div class="rent-culc-result">
        <div class="rent-culc-result-bi spec1">
          <h1>Bi-Weekly Payment</h1>
          <h2 class="spec">$ {{ biweakpay }}</h2>
        </div>

        <div class="rent-culc-result-bi">
          <h1>Monthly Payment</h1>
          <h2>$ {{ monthpay }}</h2>
        </div>

        <div class="rent-culc-result-bi">
          <h1>Weekly Payment</h1>
          <h2>$ {{ weakpay }}</h2>
        </div>
        <BlueButton @click="goTo405" class="button-result" ButtonText="Request a car" />
      </div>
    </div>
  </div>
</template>

<script>
import WhiteButton from "@/components/WhiteButton.vue";
import BlueButton from "@/components/BlueButton.vue";

export default {
  name: "RentPrice",
  components: {
    WhiteButton,
    BlueButton,
  },
  methods: {
    goTo405() {
      this.$router.push("/405");
    },
  },
  data() {
    return {
      cost: 150000,
      month: 18,
    };
  },
  computed: {
    monthpay: function () {
      let cost = this.cost;
      let month = this.month;
      let monthpay = cost / month;
      return Math.round(monthpay);
    },
    weakpay: function () {
      let monthpay = this.monthpay;
      let weakpay = monthpay / 4;
      return Math.round(weakpay);
    },
    biweakpay: function () {
      let weakpay = this.weakpay;
      return Math.round(weakpay * 2);
    },
  },
};
</script>

<style scoped lang="scss">
.button:focus {
  background-color: #7481ff;
  color: white;
}
.rentprice {
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 10% 7.5%;
  font-family: "Gilroy";
  font-style: normal;
}
.rentprice-tittle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456b;
    width: 50%;
    margin: auto 0;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    width: 50%;
    margin: auto 0;
  }
}
.rent-culc {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 5%;
}
.rent-culc-sliders {
  display: flex;
  flex-direction: column;
  width: 55%;
  padding: 5%;
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.rent-culc-buttons {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.rent-culc-slider {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456b;
  }
  h2 {
    font-size: 25px;
    line-height: 180%;
    text-align: right;
    letter-spacing: 0.02em;
    color: #41456b;
    margin: auto 0 auto auto;
    text-transform: uppercase;
    span {
      font-size: 16px;
      color: #606276;
    }
  }
}
.rent-culc-result {
  width: 20%;
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5%;
}
.rent-culc-result-bi {
  margin-bottom: 5%;
  h1 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    margin: 0;
  }
  h2 {
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456b;
    margin: 0;
  }
  .spec {
    font-weight: 700;
    font-size: 40px;
    line-height: 140.5%;
    color: #7481ff;
  }
}
.button-result {
  margin-top: 5%;
  width: 100%;
}
@media (max-width: 900px) {
  .rent-culc-sliders {
    background: none;
    box-shadow: none;
    width: 100%;
  }
  .rent-culc-result {
    background: none;
    box-shadow: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .rent-culc {
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  .rent-culc-result-bi {
    width: 33%;
    text-align: right;
    .spec {
      font-size: 35px;
    }
  }
  .button-result {
    width: 40%;
  }
  .spec1 {
    text-align: left;
  }
}

@media (max-width: 600px) {
  .rentprice {
    width: 95%;
    margin: 15% auto;
  }
  .rentprice-tittle {
    h1 {
      width: 100%;
      font-size: 30px;
      line-height: 140.5%;
    }
    h2 {
      width: 100%;
      margin-top: 5%;
    }
  }
  .rent-culc-buttons {
    width: 100%;
  }
  .button {
    width: 33%;
    padding-left: 0;
    padding-right: 0;
  }
  .rent-culc-result-bi {
    width: 50%;
    text-align: left;
  }
  .spec1 {
    width: 100%;
  }
  .button-result {
    width: 100%;
  }
}
input[type="range"] {
  height: 28px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #ffffff;
  background: #7481ff;
  border-radius: 0px;
  border: 0px solid #ffffff;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #a6a6a6;
  border: 2px solid #ffffff;
  height: 20px;
  width: 20px;
  border-radius: 0px;
  background: #7481ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #7481ff;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #ffffff;
  background: #7481ff;
  border-radius: 0px;
  border: 0px solid #ffffff;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #a6a6a6;
  border: 2px solid #ffffff;
  height: 20px;
  width: 20px;
  border-radius: 0px;
  background: #7481ff;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #7481ff;
  border: 0px solid #ffffff;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #ffffff;
}
input[type="range"]::-ms-fill-upper {
  background: #7481ff;
  border: 0px solid #ffffff;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #ffffff;
}
input[type="range"]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #a6a6a6;
  border: 2px solid #ffffff;
  height: 20px;
  width: 20px;
  border-radius: 0px;
  background: #7481ff;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #7481ff;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #7481ff;
}
</style>
