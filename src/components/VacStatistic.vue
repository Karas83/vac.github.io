<template>
  <div class="vacstatistic">
    <div class="vacstatistic__tittle">
      <div class="vacstatistic__tittle-info">
        <h1>Happy customers</h1>
        <h2>
          Since 2017, we have helped thousands of Canadians get their dream
          vehicles from the comfort of their homes.
        </h2>
      </div>
      <div class="vacstatistic__tittle-request vacstatistic__tittle-request1">
        <h1>What are you waiting? Get started right now!</h1>
        <BlueButton
          @click="goTo405"
          class="vacstatistic__BlueButton"
          ButtonText="Request a Car"
        />
      </div>
    </div>
    <div class="vacstatistic__info">
      <StatisticItem stat="7,988+" statinfo="Sold Cars" />
      <StatisticItem stat="16,974+" statinfo="Vehicles To Choose From" />
      <StatisticItem stat="123" statinfo="Experts Across Canada" />
    </div>
    <div class="vacstatistic__tittle-request vacstatistic__tittle-request2">
      <h1>What are you waiting? Get started right now!</h1>
      <BlueButton class="vacstatistic__BlueButton" ButtonText="Request a Car" />
    </div>
  </div>
</template>

<script>
import BlueButton from "@/components/BlueButton.vue";
import StatisticItem from "@/components/StatisticItem.vue";

export default {
  name: "VacStatistic",
  components: {
    BlueButton,
    StatisticItem,
  },
  methods: {
    goTo405() {
      this.$router.push("/405");
    },
  },
};
</script>

<style scoped lang="scss">
.vacstatistic {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  margin: 15% 7.5% 10%;
  font-family: "Gilroy";
  font-style: normal;
}
.vacstatistic__tittle {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.vacstatistic__tittle-info {
  width: 80%;
  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456b;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
  }
}
.vacstatistic__tittle-request {
  width: 50%;
  h1 {
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456b;
  }
}
.vacstatistic__info {
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .statisticitem__cont {
    width: 33%;
    margin-right: 10%;
    margin-bottom: 10%;
  }
}
.vacstatistic__BlueButton {
  margin-top: 5%;
}
.vacstatistic__tittle-request2 {
  display: none;
}
@media (max-width: 1200px) {
  .vacstatistic__info {
    .statisticitem__cont {
      width: 40%;
      margin-right: 10%;
      margin-bottom: 10%;
    }
  }
}
@media (max-width: 900px) {
  .vacstatistic__tittle {
    width: 100%;
  }
  .vacstatistic__tittle-request1 {
    display: none;
  }
  .vacstatistic__tittle-request2 {
    display: block;
    width: 45%;
  }
  .vacstatistic__info {
    margin-top: 5%;
    width: 100%;
    .statisticitem__cont {
      width: 35%;
      margin: 0 5% 5% 0;
    }
  }
}
@media (max-width: 600px) {
  .vacstatistic {
    width: 90%;
    margin: 15% 0 0 5%;
  }
  .vacstatistic__tittle-info {
    width: 100%;
    h1 {
      font-size: 30px;
      line-height: 140.5%;
    }
  }
  .vacstatistic__info {
    .statisticitem__cont {
      width: 100%;
      margin: 2.5% 0;
    }
  }
  .vacstatistic__tittle-request2 {
    width: 100%;
    h1 {
      width: 90%;
    }
    .vacstatistic__BlueButton {
      width: 100%;
    }
  }
}
</style>
