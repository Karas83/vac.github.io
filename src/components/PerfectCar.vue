<template>
  <div class="perfect__car">
    <h1>Your perfect car in 5 easy steps</h1>
    <div class="text__car">
      <div class="perfect__car-item-cont">
        <PerfectCarItem
          ItemNumb="1"
          ItemText1="First Contact"
          ItemText2="Tell us what your dream vehicle is."
        />
        <PerfectCarItem
          ItemNumb="2"
          ItemText1="Vehicle Selection

"
          ItemText2="One of our Qualified Agents sends you custom
pictures and videos of the car you are interested in."
        />
        <PerfectCarItem
          ItemNumb="3"
          ItemText1="Secure Financing

"
          ItemText2="You work with a dedicated Qualified Agent to
secure financing on your terms."
        />
        <PerfectCarItem
          ItemNumb="4"
          ItemText1="Vehicle Delivery"
          ItemText2="We deliver your car to your home or office for
you to test drive."
        />
        <PerfectCarItem
          ItemNumb="5"
          ItemText1="Getting Vehicle"
          ItemText2="If you love the vehicle, you sign the paperwork
and keep the car."
        />
      </div>
    </div>
    <div class="img-cont">
      <img class="img-cont-phone1" src="@/assets/phone1.png" alt="" />
      <img class="img-cont-phone2" src="@/assets/phone2.png" alt="" />
    </div>
  </div>
</template>

<script>
import PerfectCarItem from "@/components/PerfectCarItem.vue";

export default {
  name: "PerfectCar",
  components: {
    PerfectCarItem,
  },
};
</script>

<style scoped lang="scss">
.perfect__car {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: "Gilroy";
  font-style: normal;
  width: 85%;
  margin: 5% 0 0 7.5%;
  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456b;
    width: 70%;
    padding-right: 70%;
  }
}
.perfect__car-item-cont {
  width: 90%;
}
.text__car {
  width: 50%;
}
.img-cont {
  width: 50%;
  position: relative;
}
.img-cont-phone1 {
  position: absolute;
  bottom: 0px;
  width: 50%;
}
.img-cont-phone2 {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 70%;
}
@media (max-width: 1200px) {
  .perfect__car {
    h1 {
      padding-right: 55%;
    }
  }
}
@media (max-width: 900px) {
  .perfect__car {
    width: 95%;
    margin: 15% 0 0 2.5%;
    h1 {
      padding-right: 0;
      width: 100%;
    }
  }
  .text__car {
    width: 60%;
  }
  .img-cont {
    width: 40%;
  }
  .img-cont-phone1 {
    top: 0px;
    right: 0;
    left: 0;
    
    width: 65%;
    transform: rotate(15deg);
  }
  .img-cont-phone2 {
    bottom: 0px;
    right: 0;
    left: 0;
    
    width: 82%;
    transform: rotate(30deg);
  }
}
@media (max-width: 600px) {
  .perfect__car {
    width: 95%;
    margin: 15% 0 0 2.5%;
    h1 {
      padding-right: 0;
      width: 100%;
      font-size: 30px;
      line-height: 140.5%;
    }
  }
  .perfect__car-item-cont{
    width: 100%;
  }
  .text__car {
    width: 100%;
  }
  .img-cont {
    width: 100%;
    margin-top: 5%;
    margin-bottom: 80%;
  }
  .img-cont-phone1 {
    bottom: 0px;
    right: 0;
    left: 0;
    margin: 0 auto 0 0;
    width: 50%;
    transform: rotate(0deg);
  }
  .img-cont-phone2 {
    top: -5%;
    right: 0;
    left: 0;
    margin: 0 0 0 auto;
    width: 70%;
    transform: rotate(0deg);
  }
}
</style>
