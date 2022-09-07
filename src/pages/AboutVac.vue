<template>
  <VacHeader />
  <PageTittle tittle="About VAC " />
  <div class="about-vac-cont1">
    <div class="about-vac-cont1-text">
      <h1>Our mission</h1>
      <h2>
        Our mission at VAC is to help you find the perfect car at the perfect
        price and with the perfect auto loan. We make buying a car simple. You
        can complete the entire process from home—we’ll even deliver the car to
        you!
      </h2>
      <BlueButton
        @click="goTo405"
        class="about-vac-cont1__BlueButton"
        ButtonText="Request a Car"
      />
    </div>
    <img src="@/assets/Kia1.png" alt="" />
  </div>
  <div class="about-vac-cont2">
    <div class="about-vac-cont2-text">
      <h1>Get your dream car</h1>
      <h2>
        We founded VAC because we hated how complicated it was to buy a car. You
        only have so much free time in your life. You don’t want to waste it
        going to different car dealerships every weekend for weeks and months
        trying to track down the right car. We also hated how choosing a car and
        figuring out the financing for the vehicle were treated as totally
        separate processes! Instead of dealing with a salesperson, then being
        handed off to a closer, and then shuffled over to a finance manager, we
        wanted to create a way for people to buy a car and only deal with a
        single person for the entire process.
      </h2>
    </div>
    <div class="about-vac-cont2-text2">
      <PerfectCarItem
        ItemNumb="1"
        ItemText1="Quickly"
        ItemText2="You do not spend a lot of your time going
to car dealerships"
      />
      <PerfectCarItem
        ItemNumb="2"
        ItemText1="Simply"
        ItemText2="You can order your dream car just by talking to our specialist by phone"
      />
      <PerfectCarItem
        ItemNumb="3"
        ItemText1="Conveniently"
        ItemText2="We will deliver the car directly to the doorstep of your home or office"
      />
    </div>
  </div>

  <div class="about-vac-cont2">
    <img src="@/assets/Nissan1.png" alt="" />
    <div class="about-vac-cont2-text">
      <h1>VAC is convenience and transparency</h1>
      <h2>
        We want to make simple for you to find the car you want. We also want to
        make sure you are 100% comfortable with the terms of the conditions of
        your auto loan.Buying a car has never been easier. You pick out the car
        you want on our website. You work with one of our Qualified Agents to
        secure financing. Then we bring the car to you—all before you sign
        anything. You test drive the vehicle, and if you like it, you sign the
        loan documents right there and the car is yours.
      </h2>
    </div>
  </div>
  <div class="about-vac-cont2">
    <div class="about-vac-cont2-text">
      <h1>Get a car at the best prices and conditions</h1>
      <h2>
        Not only is buying a car with VAC easy, it’s also the best way to save
        money. We have partnerships with Canada’s largest lenders. That allows
        us to help you secure loans at the best interest rates available.
        Because convenience and transparency are our founding principles, we
        take the time to answer all of your questions about the vehicle and the
        auto loan. We will send you pictures and videos of any part of the car
        you like before you request a test drive.
      </h2>
    </div>
    <div class="about-vac-cont2-text">
      <h3>
        We think that VAC is the best way to buy a car in Canada. Try it for
        yourself and see how much time and money you can save.
      </h3>
      <h2>
        There are never any hidden fees or costs. We never ask you to sign
        anything until we have explained it clearly and you have had a chance to
        read it.
      </h2>
      <BlueButton
        @click="goTo405"
        class="about-vac-cont1__BlueButton"
        ButtonText="Request a Car"
      />
    </div>
  </div>
  <div class="spec5">
    <div class="about-vac-cont1">
      <div class="about-vac-cont1-text">
        <h5>Contact us today and speak with one of our qualified agents</h5>
        <BlueButton
          class="about-vac-cont1__BlueButton-spec"
          ButtonText="Contact Us Now"
        />
      </div>
      <div class="about-vac-cont2-text">
        <h1>Our qualified agents</h1>
        <h2>
          The true secret to success of VAC isn’t our streamlined purchasing and
          financing processes. The real reason VAC is the easiest and best way
          to buy a car in Canada is because of our outstanding Qualified
          Agents.Our team provides you with the best customer experience in the
          automotive industry. You work with a dedicated representative
          throughout the process. They are able to answer any questions you have
          about any of our vehicles or the financing. Are you interested in
          seeing pictures or videos of a car? Your qualified agent will send
          them to you.
        </h2>
      </div>
    </div>
  </div>

  <ClientReviews />

  <div class="about-vac-cont2 spec6">
    <div class="about-vac-cont2-text">
      <h1>We're dynamic team of creative people with innovative mind</h1>
      <h4>Our History</h4>
      <h2>
        We want to make simple for you to find the car you want. We also want to
        make sure you are 100% comfortable with the terms of the conditions of
        your auto loan.Buying a car has never been easier. You pick out the car
        you want on our website. You work with one of our Qualified Agents to
        secure financing. Then we bring the car to you—all before you sign
        anything. You test drive the vehicle, and if you like it, you sign the
        loan documents right there and the car is yours.
      </h2>
      <h4>Our Goal</h4>
      <h2>
        Buying a car has never been easier. You pick out the car you want on our
        website. You work with one of our Qualified Agents to secure financing.
        Then we bring the car to you—all before you sign anything. You test
        drive the vehicle, and if you like it, you sign the loan documents right
        there and the car is yours.
      </h2>
    </div>
    <img src="@/assets/aboutimg1.png" alt="" />
  </div>

  <div class="about-vac-cont2 spec7">
    <img src="@/assets/aboutimg2.png" alt="" />
    <div class="about-vac-cont2-text">
      <h1>Main features</h1>
      <h2>
        We are your one stop shop. We believe that vehicle shopping should be a
        fun and painless process and with years of experience, we make it just
        that.
      </h2>
      <div class="vacstatistic__info">
        <StatisticItem stat="7,988+" statinfo="Sold Cars" />
        <StatisticItem stat="123" statinfo="Working Experts" />
        <StatisticItem stat="1560+" statinfo="Happy Clients" />
      </div>
    </div>
  </div>

  <RentPrice />
  <VacFooter />
</template>

<script>
import VacHeader from "@/components/Header.vue";
import RentPrice from "@/components/RentPrice.vue";
import VacFooter from "@/components/VacFooter.vue";
import PageTittle from "@/components/PageTittle.vue";
import ClientReviews from "@/components/ClientReviews.vue";
import BlueButton from "@/components/BlueButton.vue";
import PerfectCarItem from "@/components/PerfectCarItem.vue";
import StatisticItem from "@/components/StatisticItem.vue";

export default {
  name: "HomePage",
  components: {
    VacHeader,
    RentPrice,
    VacFooter,
    PageTittle,
    ClientReviews,
    BlueButton,
    PerfectCarItem,
    StatisticItem,
  },
  methods: {
    goTo405() {
      this.$router.push("/405");
    },
  },
};
</script>

<style scope lang="scss">
.about-vac-cont1 {
  font-family: "Gilroy";
  font-style: normal;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;
  padding: 0 7.5%;
  margin: 5% 0;
  .about-vac-cont1-text {
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 5%;
    background: #ffffff;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
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
      margin: 0;
    }
    h5 {
      font-size: 30px;
      line-height: 140%;
    }
    .about-vac-cont1__BlueButton {
      margin: 5% 0 0;
      width: 45%;
    }
    .about-vac-cont1__BlueButton-spec {
      width: 50%;
    }
  }
  img {
    width: 45%;
    height: 100%;
    align-self: end;
  }
}
.about-vac-cont2 {
  font-family: "Gilroy";
  font-style: normal;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85%;
  padding: 0 7.5%;
  margin: 10% 0;
  .about-vac-cont2-text {
    display: flex;
    flex-direction: column;
    width: 45%;

    h1 {
      font-weight: 700;
      font-size: 45px;
      line-height: 140.5%;
      color: #41456b;
      margin-top: 0;
    }
    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 180%;
      letter-spacing: 0.02em;
      color: #606276;
      margin: 0;
    }
    h3 {
      font-weight: 700;
      font-size: 25px;
      line-height: 140%;
      letter-spacing: 0.02em;
      color: #41456b;
    }
    h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: #41456b;
      margin: 2% 0;
    }
    .about-vac-cont1__BlueButton {
      margin: 5% 0 0;
      width: 45%;
    }
  }
  .about-vac-cont2-text2 {
    display: flex;
    flex-direction: column;
    width: 45%;
  }
  img {
    width: 45%;
    height: 100%;
    align-self: end;
  }
}

.about-vac-cont2-text {
  display: flex;
  flex-direction: column;
  width: 45%;
  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456b;
    margin-top: 0;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
    margin: 0;
  }
}

.spec6 {
  .about-vac-cont2-text {
    width: 45%;
    h1 {
      margin-bottom: 0;
    }
  }
  img {
    width: 50%;
    align-self: center;
  }
}
.spec7 {
  img {
    align-self: center;
    width: 50%;
  }
  .about-vac-cont2-text {
    margin-top: 5%;
  }
  .vacstatistic__info {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 5%;
    .statisticitem__cont {
      width: 33%;
      margin-right: 10%;
      margin-bottom: 10%;
    }
  }
}

@media (max-width: 900px) {
  .about-vac-cont1 {
    .about-vac-cont1-text {
      width: 100%;
    }
    img {
      width: 100%;
      margin-top: 5%;
    }
  }
  .about-vac-cont2 {
    .about-vac-cont2-text {
      margin-top: 5%;
      width: 100%;
    }
    .about-vac-cont2-text2 {
      width: 100%;
    }
    img {
      width: 100%;
      margin-top: 5%;
    }
  }
  .spec5 {
    display: none;
  }
  .spec7 {
    img {
      order: 1;
      margin-top: 0;
    }
  }
}
@media (max-width: 600px) {
  .about-vac-cont1 {
    width: 90%;
    padding: 0 5%;
    .about-vac-cont1-text {
      h1 {
        font-size: 30px;
        line-height: 140.5%;
      }
      .about-vac-cont1__BlueButton {
        width: 100%;
      }
    }
  }
  .about-vac-cont2 {
    .about-vac-cont2-text {
      h1 {
        font-size: 30px;
        line-height: 140.5%;
      }
      .about-vac-cont1__BlueButton {
        width: 100%;
      }
    }
  }
  .spec7 {
    .vacstatistic__info {
      .statisticitem__cont {
        width: 100%;
        margin-right: 0;
        padding: 5% 5% 0 5%;
      }
    }
  }
}
</style>
