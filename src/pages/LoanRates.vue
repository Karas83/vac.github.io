<template>
  <VacHeader />
  <PageTittle tittle="Loan rates " />
  <div class="about-vac-cont1">
    <div class="about-vac-cont1-text">
      <h1>Our credit policy</h1>
      <h2>
        You want to secure a loan that works for your budget. Here at VAC we
        work with Canada’s largest lenders to help you find the best interest
        rates and terms for your auto loan.
      </h2>
      <BlueButton
        @click="goTo405"
        class="about-vac-cont1__BlueButton"
        ButtonText="Request a Car"
      />
    </div>
    <img src="@/assets/Chevrolet1.png" alt="" />
  </div>
  <div class="about-vac-cont1">
    <h1>Interest rates and loan terms</h1>
    <div class="about-vac-cont1-text spec1">
      <div class="about-vac-cont1-text-tittle">
        <img src="@/assets/loanIcon.png" alt="" />
        <h3>What are my interest rate options?</h3>
      </div>
      <h2>
        We work to secure customized auto loans from Canada’s largest lenders.
        Your interest rate is critical for determining the total cost of your
        auto financing. Interest rates are based on many factors including the
        loan amount, your credit score, and your budget. We help you find the
        lowest interest rates available for your auto loan.
      </h2>
    </div>
    <div class="about-vac-cont1-text spec1">
      <div class="about-vac-cont1-text-tittle">
        <img src="@/assets/loanIcontime.png" alt="" />
        <h3>How long will my loan term be?</h3>
      </div>
      <h2>
        Our goal is to find the right car and the right loan for you. Because we
        have relationships with so many different lenders, we can help you find
        the right term length for your budget. The longer the loan is, often the
        lower the monthly payments will be—but the more expensive the loan will
        be overall. Most of the loans we secure for our clients are between 36
        and 72 months.
      </h2>
    </div>
  </div>
  <div class="about-vac-cont1 spec2">
    <div class="about-vac-cont1-text">
      <h1>Benefits of getting an auto loan with VAC</h1>
      <h2>
        For many people getting a reasonable auto loan is the best way for them
        to get a new car. However, the benefits of getting the right loan go
        beyond just being able to drive a nice vehicle.
      </h2>
      <h3>
        When you work with VAC, there are never any hidden costs or fees! We lay
        out all the terms and conditions so that you know exactly what details
        of the loan are before you sign anything.
      </h3>
      <BlueButton
        @click="goTo405"
        class="about-vac-cont1__BlueButton"
        ButtonText="Request a Car"
      />
    </div>
    <img src="@/assets/ford-escape1.png" alt="" />
  </div>

  <RentPrice />
  <VacFooter />
</template>

<script>
import VacHeader from "@/components/Header.vue";
import RentPrice from "@/components/RentPrice.vue";
import VacFooter from "@/components/VacFooter.vue";
import PageTittle from "@/components/PageTittle.vue";
import BlueButton from "@/components/BlueButton.vue";

export default {
  name: "HomePage",
  components: {
    VacHeader,
    RentPrice,
    VacFooter,
    PageTittle,
    BlueButton,
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
  h1 {
    width: 100%;
    margin: 5% 0;
    font-size: 45px;
  }
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
    .about-vac-cont1__BlueButton {
      margin: 5% 0 0;
      width: 45%;
    }
  }
  img {
    width: 45%;
    height: 100%;
    align-self: end;
  }
}
.about-vac-cont1 {
  .spec1 {
    width: 39%;
    .about-vac-cont1-text-tittle {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      img {
        width: 60px;
        height: 60px;
        align-self: center;
      }
      h3 {
        font-size: 25px;
        line-height: 140%;
        letter-spacing: 0.02em;
        color: #41456b;
        width: 80%;
        align-self: center;
      }
    }
  }
}
.spec2 {
  .about-vac-cont1-text {
    box-shadow: none;
    padding: 0;
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
  .spec1 {
    margin-top: 5%;
  }
}
@media (max-width: 600px) {
  .about-vac-cont1 {
    width: 90%;
    padding: 0 5%;
    h1 {
      font-size: 30px;
    }
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
}
</style>
